const { network } = require("hardhat");
const {
    developmentChains,
    networkConfig,
} = require("../helper-hardhat-config");
require("dotenv").config();
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { log, deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    const args = [];

    log("---------------------------------------------------------------");

    log("deploying contract and waiting for confirmations");

    const contract = await deploy("DefiInsure", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });

    log(`contract deployed at ${contract.address}`);

    if (
        !developmentChains.includes(network.name) &&
        process.env.BLOCKSCAN_API
    ) {
        await verify(contract.address, args);
    }
};

module.exports.tags = ["all", "insure"];
