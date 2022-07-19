
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract MyContract {
    // using Strings for uint256;
    uint256 public value;
    string public name;

    constructor(uint256 _value, string memory _name) {
        value = _value;
        name = _name;
    }

    function MyFunction() public view returns(uint) {
        return value * 10;
    }
}