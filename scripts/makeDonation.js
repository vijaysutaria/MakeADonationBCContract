const hre = require("hardhat");
// const waffle = require("@nomicfoundation/hardhat-toolbox");

// Get the eather balance for address parameter
async function getBalance(address) {
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

async function printBalances(addresses) {
    let idx = 0;
    for (const a of addresses) {
        console.log(`Address ${idx} balance: `, await getBalance(a));
        idx++;
    }
}

async function printMemos(memos) {
    for (const memo of memos) {
        console.log(`At ${memo.timestamp}, ${memo.name}, ${memo.from}, said : "${memo.message}"`);
    }
}

async function main() {
    const [owner, donator, donator2, donator3] = await hre.ethers.getSigners();

    const MakeADonation = await hre.ethers.getContractFactory("MakeADonation");
    const makeADonation = await MakeADonation.deploy();
    await makeADonation.deployed();

    console.log("Make A Donation deployed to ", makeADonation.address);

    const addresses = [owner.address, donator.address, makeADonation.address];

    console.log("====Init====");
    await printBalances(addresses);

    const dontation = { value: hre.ethers.utils.parseEther("1") };
    await makeADonation.connect(donator).makeDonation("user 1", "user 1 message", dontation);
    await makeADonation.connect(donator).makeDonation("user 2", "user 2 message", dontation);
    await makeADonation.connect(donator).makeDonation("user 3", "user 3 message", dontation);

    console.log("====After Donation====");
    await printBalances(addresses);

    await makeADonation.connect(owner).withDrawDonation();

    console.log("====After Withdraw====");
    await printBalances(addresses);

    console.log("====Memos====");
    const memos = await makeADonation.getMemos();
    printMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});