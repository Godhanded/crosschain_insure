// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import {IAxelarGateway} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import {IAxelarGasService} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import {AxelarExecutable} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executables/AxelarExecutable.sol";
import {StringToAddress, AddressToString} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/StringAddressUtils.sol";

error DefiInsure__InvalidValue();
error DefiInsure__NotOwner();
error DefiInsure__TxFailed();

contract DefiInsure is AxelarExecutable {
    using StringToAddress for string;
    using AddressToString for address;
    struct entity {
        address entityAddr;
        uint256 deadline;
    }

    IAxelarGasService public immutable i_gasReceiver;

    mapping(string => entity) private s_insured;

    uint256 public s_balance;
    uint256 public s_netStaked;
    uint256 public s_netEntities;

    address private s_owner;

    uint256 constant MINIMUM_VALUE = 200;
    uint256 constant DECIMALS = 1e18;

    constructor(address gateway_, address gasReceiver_)
        AxelarExecutable(gateway_)
    {
        s_owner = msg.sender;
        i_gasReceiver = IAxelarGasService(gasReceiver_);
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
        string calldata destinationChain,
        address destinationAddress,
        address to,
        uint256 amount
    ) external payable {
        if (msg.sender != s_owner) revert DefiInsure__NotOwner();
        bytes memory payload = abi.encode(to, amount);
        string memory stringAddr = destinationAddress.toString();
        if (msg.value > 0) {
            i_gasReceiver.payNativeGasForContractCall{value: msg.value}(
                address(this),
                destinationChain,
                stringAddr,
                payload,
                msg.sender
            );
        }
        gateway.callContract(destinationChain, stringAddr, payload);
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
