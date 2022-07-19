
const { ethers } = require('ethers');
const dotenv = require('dotenv').config();

// Create the ETH NODE Connection
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_ID}`);

const walletAddress1 = '0xabFD7f1987d7Ad1c5122cE19873bfD12e3C2fAd4';
const walletAddress2 = '0x6368a3892ddbf95D271EdF1E651a368096a6C237';

async function  main() {
    
    const balance1 = await provider.getBalance(walletAddress1);
    const balance2 = await provider.getBalance(walletAddress2);

    console.log(`\nETH Balance of ${walletAddress1} --> ${ethers.utils.formatEther(balance1)} ETH\n`);
    console.log(`\nETH Balance of ${walletAddress2} --> ${ethers.utils.formatEther(balance2)} ETH\n`);
};

main();
