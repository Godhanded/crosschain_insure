const networkConfig = {
    31337: {
        name: "hardhat",
    },
    5: {
        name: "goerli",

        //args
    },
    97: {
        name: "BNB",
    },
    80001: {
        name: "Polygon",
    },
    4002: {
        name: "fantom",
    },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = { networkConfig, developmentChains };
