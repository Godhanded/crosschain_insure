var addresses = {
    97: {
        name: "BNB",
        address: "0xE4e85a3Ba248F4a58961FdaB27D484Ce6910362e",
        url: "https://testnet.bscscan.com/address/0xE4e85a3Ba248F4a58961FdaB27D484Ce6910362e",
    },
    80001: {
        name: "Polygon",
        address: "0xE9bdB979287Fc773a895fa86653E9B38f550F8A0",
        url: "https://mumbai.polygonscan.com/address/0xE9bdB979287Fc773a895fa86653E9B38f550F8A0",
    },
    4002: {
        name: "FTM",
        address: "0xD088e93c5934D19b5440c89216D51B5AB70e437b",
        url: "https://testnet.ftmscan.com/address/0xD088e93c5934D19b5440c89216D51B5AB70e437b",
    },
};

var abi=[
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "gateway_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "gasReceiver_",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "DefiInsure__InvalidValue",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DefiInsure__NotOwner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DefiInsure__TxFailed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidAddress",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotApprovedByGateway",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "commandId",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "sourceChain",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "sourceAddress",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "commandId",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "sourceChain",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "sourceAddress",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            },
            {
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "executeWithToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "gateway",
        "outputs": [
            {
                "internalType": "contract IAxelarGateway",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            }
        ],
        "name": "getDeadline",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            }
        ],
        "name": "getEntity",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "entityAddr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DefiInsure.entity",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "i_gasReceiver",
        "outputs": [
            {
                "internalType": "contract IAxelarGasService",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            }
        ],
        "name": "payInsurance",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "s_balance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "s_netEntities",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "s_netStaked",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "unStake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "destinationChain",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "destinationAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawOtherchains",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]
