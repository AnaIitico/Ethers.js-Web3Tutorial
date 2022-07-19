
const { ethers } = require('ethers');
const dotenv = require('dotenv').config();

// Create the ETH NODE Connection
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_ID}`);

const account1 = '0xabFD7f1987d7Ad1c5122cE19873bfD12e3C2fAd4';
const account2 = '0x6368a3892ddbf95D271EdF1E651a368096a6C237';

const privateKey1 = `${process.env.PRIVATE_KEY1}`; // Private key of account 1
const walletSigner = new ethers.Wallet(privateKey1, provider);

async function main() {

    try {
        const senderBalanceBefore = await provider.getBalance(account1);
        const recieverBalanceBefore = await provider.getBalance(account2);

        console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`);
        console.log(`Reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)};\n`);

        const tx = await walletSigner.sendTransaction({
            to: account2,
            value: ethers.utils.parseEther('0.01')
        });

        // await for the tx object to return
        await tx.wait();
        console.log(tx);

        // if you dont'await the tx, the balances won't be correct
        const senderBalanceAfter = await provider.getBalance(account1);
        const recieverBalanceAfter = await provider.getBalance(account2);

        console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`);
        console.log(`Reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`);

    } catch (error) {
        console.log(error);
    };

};

main();