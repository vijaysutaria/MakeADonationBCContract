# Make a Donation Contract- Using Hardhat , Etherium 

This project demonstrates blockchain, wallet, ethereum capabilities of transactions. This project has example of MakeADonation

## Prerequisites

create `.env` file at root level and set value of below keys
```
GOERLI_URL = ...
GOERLI_API_KEY = ...
PRIVATE_KEY = ...
```

## Commands

```shell
// To Run locally
npx hardhat run scripts/MakeADonation.js

// To publish
npx hardhat run scripts/deploy.js --network [networkname]
```

## Test Application

You must have meta mask extension installed in your google chrome browser
Click [here](http://makeadonation.s3-website.eu-west-2.amazonaws.com/) to see the running version of this app


If you  want to check react app code who triggers this contract, then its available [here](https://github.com/vijaysutaria/MakeADonationBCContractUI)
