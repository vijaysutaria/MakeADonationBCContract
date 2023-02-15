const hre = require("hardhat");

async function main() {
    const MakeADonation = await hre.ethers.getContractFactory("MakeADonation");
    const makeADonation = await MakeADonation.deploy();
    await makeADonation.deployed();

    console.log("Make A Donation deployed to ", makeADonation.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});