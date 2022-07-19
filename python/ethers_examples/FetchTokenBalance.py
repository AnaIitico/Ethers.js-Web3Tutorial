
import os, json
from pathlib import Path
from web3 import Web3
from dotenv import load_dotenv

# Load the environment variables from the .env file by calling the load_dotenv function
load_dotenv()

# Load ERC20 ABI
with open(Path('./abi/ERC20Abi.json')) as f:
    abi = json.load(f)


def FetchTokenBalance():

    # Create the ETH NODE Connection
    infura_url = f"https://goerli.infura.io/v3/{os.getenv('INFURA_ID')}"
    web3 = Web3(Web3.HTTPProvider(infura_url))
    
    if web3.isConnected():
        print("\nYou're Connected to The Blockchain\n")

    # Wallet Addresses
    wallet_address1 = '0xabFD7f1987d7Ad1c5122cE19873bfD12e3C2fAd4'
    wallet_address2 = '0x6368a3892ddbf95D271EdF1E651a368096a6C237'
    
    # DAI Contract Goerli
    contract_address = '0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60'; # DAI Contract Goerli

    contract = web3.eth.contract(address=contract_address, abi=abi)
    totalSupply = contract.functions.totalSupply().call()
    balance1 = contract.functions.balanceOf(wallet_address1).call()
    balance2 = contract.functions.balanceOf(wallet_address2).call()

    print(f'\nReading from {contract_address}\n')
    print('Token Name:', contract.functions.name().call(), '\n')
    print('Token Symbol:', contract.functions.symbol().call(), '\n')
    print('Token Decimals:', contract.functions.decimals().call(), '\n')
    print('Token Total Supply:', web3.fromWei(totalSupply, 'ether'), '\n')

    print('Wallet 1 Token Balance:', web3.fromWei(balance1, 'ether'), '\n')
    print('Wallet 2 Token Balance:', web3.fromWei(balance2, 'ether'), '\n')


FetchTokenBalance()
