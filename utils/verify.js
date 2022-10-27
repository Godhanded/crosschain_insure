const { run } = require("hardhat");

const verify = async (contractAddress, args) => {
    console.log("verifying contract...........");

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguements: args,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("contract already verified....");
        } else {
            console.log(error);
        }
    }
};

module.exports = { verify };
