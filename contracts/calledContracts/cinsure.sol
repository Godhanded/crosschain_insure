// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

error DefiInsure__InvalidValue();
error DefiInsure__NotOwner();
error DefiInsure__TxFailed();

contract CDefiInsure {
    struct entity {
        address entityAddr;
        uint256 deadline;
    }

    event FalseSender(string sourceAddress);

    mapping(string => entity) private s_insured;

    uint256 public s_balance;
    uint256 public s_netStaked;
    uint256 public s_netEntities;

    uint256 constant MINIMUM_VALUE = 200;
    uint256 constant DECIMALS = 1e18;

    address private s_owner;
    address private immutable CALLER;

    constructor(address caller_) {
        s_owner = msg.sender;
        CALLER = caller_;
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

    function _withdraw(address addr, uint256 amount) internal {
        s_balance -= amount;
        (bool sent, ) = payable(addr).call{value: amount}("");
        if (!sent) revert DefiInsure__TxFailed();
    }

    function anyExecute(bytes memory _data)
        external
        returns (bool success, bytes memory result)
    {
        (address _to, uint256 _amount, address sourceAddress) = abi.decode(
            _data,
            (address, uint256, address)
        );
        if (sourceAddress != CALLER) {
            revert();
        }

        _withdraw(_to, _amount);
        success = true;
        result = "";
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
