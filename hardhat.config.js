require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Make A Donation deployed @ 0x20d0A687e4691c8CEA31b1f9018f42b59d3A2445 @Goerli

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: GOERLI_URL,
            accounts: [PRIVATE_KEY]
        }
    }
};