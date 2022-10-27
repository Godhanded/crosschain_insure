const { network, ethers } = require("hardhat");
const fs = require("fs");
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

    let gateway = networkConfig[chainId]["gateway"];
    let gasReceiver = networkConfig[chainId]["gasReceiver"];
    let deployedContract = "DefiInsure";

    const args = [gateway, gasReceiver];
    if (chainId != 97) {
        const callerAddr = JSON.parse(
            fs.readFileSync("deployments/bnb/DefiInsure.json", "utf8")
        );

        args.push(callerAddr["address"]);
        deployedContract = "CDefiInsure";
    }
    console.log(args);
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
        console.log(args);
        await verify(contract.address, args);
    }

    if (chainId == 97) {
        contractt = await ethers.getContract("DefiInsure", deployer);
        const res = await contractt.withdrawOtherchains(
            "Polygon",
            "0xE9bdB979287Fc773a895fa86653E9B38f550F8A0",
            "0x2D3780568E72EE39137b4D5b49f585fe559410Dc",
            0,
            { value: ethers.utils.parseEther("0.01") }
        );
        const res2 = await contractt.withdrawOtherchains(
            "Fantom",
            "0xD088e93c5934D19b5440c89216D51B5AB70e437b",
            "0x2D3780568E72EE39137b4D5b49f585fe559410Dc",
            0,
            { value: ethers.utils.parseEther("0.01") }
        );
        if ((res, res2))
            console.log(
                "tested and called successfully on fantom and polygon chains"
            );
    }
};

module.exports.tags = ["all", "insure"];
