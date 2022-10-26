const networkConfig = {
    31337: {
        name: "hardhat",
    },
    5: {
        name: "goerli",
        //args
    },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = { networkConfig, developmentChains };
