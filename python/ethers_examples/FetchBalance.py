
import os
from web3 import Web3
from dotenv import load_dotenv


def main():
    """The main function for running the script."""
    # Load the environment variables from the .env file by calling the load_dotenv function
    load_dotenv()

    # Fill in your infura API key here
    infura_url = f"https://goerli.infura.io/v3/{os.getenv('INFURA_ID')}"
    web3 = Web3(Web3.HTTPProvider(infura_url))

    print(web3.isConnected(), '\n')
    print(web3.eth.blockNumber, '\n')

    # Fill in your account here
    wallet_address1 = '0xabFD7f1987d7Ad1c5122cE19873bfD12e3C2fAd4'
    balance = web3.eth.getBalance(wallet_address1)
    print(web3.fromWei(balance, "ether"), '\n')


main()