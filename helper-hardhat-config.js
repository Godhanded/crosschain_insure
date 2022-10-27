const networkConfig = {
    31337: {
        name: "hardhat",
    },
    5: {
        name: "goerli",
        gateway:"0xe432150cce91c13a887f7D836923d5597adD8E31",
        gasReceiver:"0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"
        //args
    },
    97:{
        name:"BNB",
        gateway:"0x4D147dCb984e6affEEC47e44293DA442580A3Ec0",
        gasReceiver:"0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"
    },
    80001:{
        name:"Polygon",
        gateway:"0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B",
        gasReceiver:"0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"
    },
    4002:{
        name:"fantom",
        gateway:"0x97837985Ec0494E7b9C71f5D3f9250188477ae14",
        gasReceiver:"0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"
    }

};

const developmentChains = ["hardhat", "localhost"];

module.exports = { networkConfig, developmentChains };
