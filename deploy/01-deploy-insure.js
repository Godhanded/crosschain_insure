const { network } = require("hardhat");
const fs= require("fs")
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

    let gateway=networkConfig[chainId]["gateway"]
    let gasReceiver= networkConfig[chainId]["gasReceiver"]
    let deployedContract="DefiInsure";
     
    const args = [gateway,gasReceiver];
    if(chainId!=97) {
        const callerAddr=  JSON.parse(fs.readFileSync("deployments/bnb/DefiInsure.json","utf8"))

        args.push(callerAddr["address"])
        deployedContract="CDefiInsure"
    }
    console.log(args)
    log("---------------------------------------------------------------");

    log("deploying contract and waiting for confirmations");


    const contract = await deploy(deployedContract, {
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
        console.log(args)
        await verify(contract.address , args);
    }
};

module.exports.tags = ["all", "insure"];
