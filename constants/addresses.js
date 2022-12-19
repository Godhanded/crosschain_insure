var addresses = {
    97: {
        name: "BNB",
        address: "0xeFf5D7c9ea237a0Ad814AB5FF07eE9805B837F13",
        url: "https://testnet.bscscan.com/address/0xeFf5D7c9ea237a0Ad814AB5FF07eE9805B837F13#code",
    },

    4002: {
        name: "FTM",
        address: "0x1D94b4EFe2310157dCD84a1F8a95cc8e6ceA29A9",
        url: "https://testnet.ftmscan.com/address/0x1d94b4efe2310157dcd84a1f8a95cc8e6cea29a9#code",
    },
};

var abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "DefiInsure__InvalidValue",
        type: "error",
    },
    {
        inputs: [],
        name: "DefiInsure__NotOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "DefiInsure__TxFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "anycallbnbcontract",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "id",
                type: "string",
            },
        ],
        name: "getDeadline",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "id",
                type: "string",
            },
        ],
        name: "getEntity",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "entityAddr",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                ],
                internalType: "struct DefiInsure.entity",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "id",
                type: "string",
            },
        ],
        name: "payInsurance",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "s_balance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "s_netEntities",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "s_netStaked",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "unStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "destinationAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "withdrawOtherchains",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
