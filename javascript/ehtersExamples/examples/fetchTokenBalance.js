
const { ethers } = require('ethers');
const ERC20_ABI = require('./abi/ERC20Abi.json');
const dotenv = require('dotenv').config();

async function FetchTokenBalance() {
    
    // Create the ETH NODE Connection
    const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_ID}`);
    
    // Wallet Addresses
    const walletAddress1 = '0xabFD7f1987d7Ad1c5122cE19873bfD12e3C2fAd4';
    const walletAddress2 = '0x6368a3892ddbf95D271EdF1E651a368096a6C237';
    const contractAddress = '0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60';
    
    // DAI Contract Goerli
    const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    const totalSupply = await contract.totalSupply();

    console.log(`\nReading from ${contractAddress}\n`);
    console.log(`Name: ${name}`);
    console.log(`Name: ${await contract.name()}`);
    console.log(`Symbol: ${symbol}`);
    console.log(`Decimals: ${decimals}`);
    console.log(`Total Supply: ${totalSupply}\n`);

    // await for the response of - What is the DAI balanceOf a wallet address
    const balance1 = await contract.balanceOf(walletAddress1);
    const balance2 = await contract.balanceOf(walletAddress2);

    console.log(`Balance Returned: ${balance1}`);
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance1)}\n`);
    console.log(`Balance Returned: ${balance2}`);
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance2)}\n`);
};


FetchTokenBalance();
