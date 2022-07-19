
const { ethers } = require('ethers');
const ERC20_ABI = require('./abi/ERC20Abi.json');
const dotenv = require('dotenv').config();


// sendTokens();

async function sendTokens(isAccount1, tokenAmount) {

    // Create the ETH NODE Connection
    const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_ID}`);

    // DAI Contract Goerli testNet
    const contractAddress = '0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60';
    // Wallet addresses
    const account1 = '0xabFD7f1987d7Ad1c5122cE19873bfD12e3C2fAd4';
    const account2 = '0x6368a3892ddbf95D271EdF1E651a368096a6C237';

    // Create the contract object
    const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);
        
    // Provide the PRIVATE_KEYs for signing
    const privateKey1 = `${process.env.PRIVATE_KEY1}`; // Private key of account 1
    const privateKey2 = `${process.env.PRIVATE_KEY2}`; // Private key of account 2

    // Create the Sender and Receiver variables
    let sender = account1;
    let senderPrivateKey = privateKey1;
    let receiver = account2;

    // Now you can flip between wallets for transfer
    if(!isAccount1){
        sender = account2;
        senderPrivateKey = privateKey2;
        receiver = account1;
    };

    // WARNING!! This wallet is 'unlocked' and can now transfer any Token
    const walletSigner = new ethers.Wallet(senderPrivateKey, provider);

    try {
        // await for the response of - What is the DAI balanceOf a wallet address
        const senderBalanceBefore = await contract.balanceOf(sender);
        const recieverBalanceBefore = await contract.balanceOf(receiver);

        console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`);
        console.log(`Reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`);

        const decimals = await contract.decimals();
        const contractWithSigner = contract.connect(walletSigner);
        const amount = ethers.utils.parseUnits(tokenAmount, decimals);

        // Transfer Tokens with a signedWithContract Object
        const tx = await contractWithSigner.transfer(receiver, amount);

        // await for the tx object to return
        await tx.wait();
        console.log(tx);

        // if you dont'await the tx, the balances won't be correct
        const senderBalanceAfter = await contract.balanceOf(sender);
        const recieverBalanceAfter = await contract.balanceOf(receiver);

        console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`);
        console.log(`Reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`);

        console.log(`https://goerli.etherscan.io/tx/${tx.hash}`);

    } catch (error) {
        console.log(error);
    };

};

sendTokens(isAccount1=false, tokenAmount='100')
