// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {ethers}=require("hardhat");

async function main() {
  // const signers = await ethers.getSigners();
  // console.log(signers);
  const  Driver=await ethers.getContractFactory("Driver");
  const contract= await Driver.deploy();                          
  console.log("deployed successfully");
  // console.log(await contract);
  const provider=ethers.provider;
  const balance=await provider.getBalance("0x914431062563c3C17C1f7A99fA521a9541F08211");
  const formatBalance = ethers.formatEther(balance);
  console.log(formatBalance);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
