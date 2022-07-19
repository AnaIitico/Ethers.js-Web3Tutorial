<!-- Find and Replace All [repo_name] -->
<!-- Replace [product-screenshot] [product-url] -->
<!-- Other Badgets https://naereen.github.io/badges/ -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- [![License][license-shield]][license-url] -->

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
            <li><a href="#built-with">Built With</a></li>
        </ul>
    </li>
    <li><a href="#project-progress">Project Progress</a></li>
    <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a>
        <ul>
            <li><a href="#running-the-project">Running The Project</a></li>
        </ul>
    </li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#acknowledgements">Acknowledgements & Other Resources</a></li>
	<li><a href="#license">License</a></li>
  </ol>
</details>

---

## About The Project

I have two videos that provide a basic explanation of the code on my YouTube Channel
 [Ethers.js Tutorial Part 1][ethers1-url] and [Ethers.js Tutorial Part 2][ethers2-url]

This blockchain project is to provide a basic introduction to Blockchain development with JavaScript, Python, and Solidity.

The purpose id to provide the developer with an introduction to web3 librarties and how to interact with an Ethereum Contract.

It's critical for developers to understand the fundamental difference between the methods that are used with the ETH Token vs methods used for the Alt Coin EVM compatible tokens.

Transfering ETH is a simple function because ETH is the native token, but whenever you want to execute transactions on other Tokens you need to approve those transactions by signing with the wallet's Private Key

This will show you how to:
- Fetch Token Blances
- Interact with an ERC20 Contract w/ JavaScript and Python
- Transfer Tokens between wallets

It also shows the basic similarities between Solidity, JS, and Py.  If you look at MyContract code for all 3 languages you will see the similarities.

I highly recommend that you watch the videos first
 [Ethers.js Tutorial Part 1][ethers1-url] and [Ethers.js Tutorial Part 2][ethers2-url]

---

## Built With

This project leverages the following tools for financial analysis:

- [Conda](https://docs.conda.io/en/latest/) - source package management system and environment management system. Using Python v3.8.

- [JupyterLab](https://jupyter.org) - For running and review Python-based programs.

- [Node.js & NPM](https://nodejs.org/en/) - This project is using node version 16.13.1. For running the FrontEnd. Node.js is an asynchronous event-driven JavaScript runtime.

- [Ethereum](https://ethereum.org/en/developers/) - Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.

- [Ethers.js](https://docs.ethers.io/v5/getting-started/) - The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.

- [Web3.py](https://web3py.readthedocs.io/en/stable/) - The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. 

- [Solidity](https://docs.soliditylang.org/en/v0.8.15/) - Solidity is an object-oriented, high-level language for implementing smart contracts.

---

## Project Progress

The project is ongoing!

---

<!-- GETTING STARTED -->
## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps. -->

I have placed Comments throughout the code so that you can follow the code and be able to replicate the app on your own. Also, so that you're able to contribute in the future :-)

I have two videos that provide a basic explanation of the code on my YouTube Channel
 [Ethers.js Tutorial Part 1][ethers1-url] and [Ethers.js Tutorial Part 2][ethers2-url]
---

## Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them. -->
A text editor such as [VS Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/) is needed for this application.

I used VS Code as the prefered text editor due to the availability of very useful extensions for Python, Anaconda and JupyterLab.

---

## Installation
WARNING! I recommend using `Node.js 16.13.1` and `Python` with `Anaconda` and `JupyterLab` versions used with the project.  You may experience conflict with dependencies if you try to use other versions.  I used `npm` to install the JavaScript node dependencies.

1. Clone the repo
   ```bash
   git clone https://github.com/AnaIitico/Web3Tutorial.git
   ```

2. You don't need to install pip - Conda comes with pip and you can also use the command
    conda install 'package name'
   
3. Install Conda according to the instructions based on your operating system.
    For windows users you MUST use the Administrator PowerShell. Users with AMD Processors MUST use the Administrator PowerShell 7 (X64) version
  
    Once installed Conda has an Admin PowerShell version shortcut - look on your Start menu for it.
    This shortcut will prove very useful at times when you need to install other apps or make adjustments to your installation

    Once installed and you have finished all Conda instructions, you will see (base) on your terminal.  Make sure that you finish the Conda full installation or this will not work!!
   
4. Install JupyterLab according to the instructions. You will also be able to install VS Code Extensions to work with JupyterLab and run each cell directly on VS Code.
    - Jupyter & Jupyter Keymaps
    - Jupyter Notebook Renderers
   
5. Activate Conda Dev environment
   ```bash
   conda activate dev
   ```
    You should now see (dev) on your terminal (if not go back to step 3)

6. Install Node.js 16.13.1 according to your Operating System. You may need to use an Administrator Terminal. Follow the instructions on the Docs for Node.js and npm
   ```bash
   npm install -g node@16.13.1
   ```

7. If you want to be able to deploy to testnets, do the following.

    Set your INFURA_ID, PRIVATE_KEY1, and PRIVATE_KEY2 environment variables.

    You can get a WEB3_INFURA_PROJECT_ID by getting a free trial of Infura. https://infura.io/login. 
    
    You can find your Private Keys from your ethereum wallet like metamask.

    You'll also need testnet ETH. You can get ETH into your wallet by using the faucet for the appropriate testnet.
    
    I used Goerli for this project. Rinkeby Faucet Located [here](https://goerlifaucet.com/)  and [here](https://faucets.chain.link/goerli).

    You can add your environment variables to a .env file. You can use the .env.example in this repo as a template, just fill in the values and rename it to '.env'.

8. Install Meatamask and do the following:

    Create a new wallet and make sure that you label it TEST1.

    Copy the private key and save it to the .env file as PRIVATE_KEY1.

    Create a new wallet and make sure that you label it TEST2.

    Copy the private key and save it to the .env file PRIVATE_KEY2.

    Copy and past the wallet address to match the private key 1 and 2 adddresses respectively.

9. Review the [Ethers.js Tutorial Part 1][ethers1-url] and [Ethers.js Tutorial Part 2][ethers2-url] if you get stuck!

---

## Usage

## Running The Project

1. Copy the wallet address for TEST1 from Meetamask and paste into each of the wallet address 1 variables on each file. It may also be called accout1.

2. Copy the wallet address for TEST2 from Meetamask and paste into each of the wallet address 2 variables on each file. It may also be called accout2.

3. You need to go to [Unisawap Goerli](https://app.uniswap.org/#/swap?chain=goerli) network and swap some GoerliETH for DAI Tokens. Make sure yout metamask account is on the Goerli network and you are using the TEST1 account! Review the[Ethers.js Tutorial Part 1][ethers1-url] and [Ethers.js Tutorial Part 2][ethers2-url] if you get stuck!

4. Have I mentioned that I really recommend that you watch the [Ethers.js Tutorial Part 1][ethers1-url] and [Ethers.js Tutorial Part 2][ethers2-url]

---

## Contributors
Jose Tollinchi

---

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

Other Resources
- Other dependencies are used for Javascript and Python.  Look closely at the require and import statements.  On javascript files look at the package.json for specific dependency version.

Acknowledgements
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AnaIitico/Web3Tutorial.svg?style=for-the-badge
[contributors-url]: https://github.com/AnaIitico/Web3Tutorial/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AnaIitico/Web3Tutorial.svg?style=for-the-badge
[forks-url]: https://github.com/AnaIitico/Web3Tutorial/network/members
[stars-shield]: https://img.shields.io/github/stars/AnaIitico/Web3Tutorial.svg?style=for-the-badge
[stars-url]: https://github.com/AnaIitico/Web3Tutorial/stargazers
[issues-shield]: https://img.shields.io/github/issues/AnaIitico/Web3Tutorial/network/members?style=for-the-badge
[issues-url]: https://github.com/AnaIitico/Web3Tutorial/issues
<!-- [license-shield]: 
[license-url]:  -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/josetollinchi/
<!-- Ethers.js Tutorial Links -->
[ethers1-url]: https://youtu.be/2KsgmpwgA2M
[ethers2-url]: https://youtu.be/PRj_z6VNkkc

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)