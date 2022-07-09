import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ERC4907Demo = await ethers.getContractFactory("ERC4907Demo");
  const erc4907Demo = await ERC4907Demo.deploy("KBYToken", "KBY");

  console.log("Token address:", erc4907Demo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });