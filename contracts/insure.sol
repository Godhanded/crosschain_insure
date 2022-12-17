// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

interface CallProxy {
    function anyCall(
        address _to,
        bytes calldata _data,
        address _fallback,
        uint256 _toChainID,
        uint256 _flags
    ) external payable;

    function calcSrcFees(
        string calldata _appID,
        uint256 _toChainID,
        uint256 _dataLength
    ) external view returns (uint256);
}

error DefiInsure__InvalidValue();
error DefiInsure__NotOwner();
error DefiInsure__TxFailed();

contract DefiInsure {
    struct entity {
        address entityAddr;
        uint256 deadline;
    }

    mapping(string => entity) private s_insured;

    uint256 public s_balance;
    uint256 public s_netStaked;
    uint256 public s_netEntities;

    address private s_owner;
    address public anycallbnbcontract =
        0xD2b88BA56891d43fB7c108F23FE6f92FEbD32045;
    uint256 constant MINIMUM_VALUE = 200;
    uint256 constant DECIMALS = 1e18;

    constructor() {
        s_owner = msg.sender;
    }

    function payInsurance(string calldata id) external payable {
        if ((msg.value / DECIMALS) != MINIMUM_VALUE)
            revert DefiInsure__InvalidValue();
        uint256 value = msg.value;
        s_balance += value;
        s_netStaked += value / 2;
        if (s_insured[id].entityAddr == address(0)) s_netEntities += 1;
        s_insured[id] = entity({
            entityAddr: msg.sender,
            deadline: block.timestamp + 365 days
        });
        //call external staking platform and stake 50% of insurance paid
    }

    function unStake(address addr, uint256 amount) external {
        /**function to pull stake from external staking contract */
        s_netStaked -= amount;
    }

    function withdraw(address addr, uint256 amount) external {
        if (msg.sender != s_owner) revert DefiInsure__NotOwner();
        s_balance -= amount;
        (bool sent, ) = payable(addr).call{value: amount}("");
        if (!sent) revert DefiInsure__TxFailed();
    }

    function withdrawOtherchains(
        address destinationAddress,
        address to,
        uint256 amount,
        uint256 chainId
    ) external payable {
        if (msg.sender != s_owner) revert DefiInsure__NotOwner();
        require(
            msg.value >=
                CallProxy(anycallbnbcontract).calcSrcFees("0", chainId, 32),
            "INSUFFICIENT FEE"
        );

        CallProxy(anycallbnbcontract).anyCall{value: msg.value}(
            destinationAddress,
            // sending the encoded bytes of the string msg and decode on the destination chain
            abi.encode(to, amount, address(this)),
            // 0x as fallback address because we don't have a fallback function
            address(0),
            // chainid of ftm testnet
            chainId,
            // Using 2 flag to pay fee on destination chain
            2
        );
    }

    function getEntity(string calldata id)
        external
        view
        returns (entity memory)
    {
        return s_insured[id];
    }

    function getDeadline(string calldata id) external view returns (uint256) {
        return s_insured[id].deadline;
    }
}
