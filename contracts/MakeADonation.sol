// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract MakeADonation {
    // Event to emit when Memo is created
    event NewMemo(
        address indexed from,
        uint256 timestamp,
        string name,
        string message
    );

    // Memo struct/ model
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

    // List of all memos
    Memo[] memos;

    // address of the contract deployer
    address payable owner;

    // Executes only when its deployed
    constructor() {
        owner = payable(msg.sender);
    }

    /**
     * @dev function to make donate
     * @param _name Name of the donator
     * @param _message Message with donation
     *
     * Donated money stays in contract itself, will be added to balance
     */
    function makeDonation(
        string memory _name,
        string memory _message
    ) public payable {
        require(msg.value > 0, "Please send non zero value");

        memos.push(Memo(msg.sender, block.timestamp, _name, _message));

        emit NewMemo(msg.sender, block.timestamp, _name, _message);
    }

    /**
     * @dev Method to withdraw the donation made
     */
    function withDrawDonation() public {
        require(owner.send(address(this).balance));
    }

    /**
     * Retrieve all memos stored in block chain
     */
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
