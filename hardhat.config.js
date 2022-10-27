require("hardhat-deploy");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [{ version: "0.8.12" }, { version: "0.8.7" }],
    },
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        goerli: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        bnb: {
            url: process.env.BNBCHAINURL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 97,
            blockConfirmations: 3,
        },
        polygon: {
            url: process.env.POLYGONCHAIN,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 80001,
            blockConfirmations: 3,
        },
        fantom: {
            url: process.env.FTM_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 4002,
        },
    },
    etherscan: {
        apiKey: process.env.BLOCKSCAN_API,
    },
    // gasReporter: {
    //     enabled: true,
    //     coinmarketcap: process.env.COINMARKETCAP_API,
    //     currency: "USD",
    //     noColors: false,
    //     // outputFile:"gas-report.txt"
    // },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
    },
};
