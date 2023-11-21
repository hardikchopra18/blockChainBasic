require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_PRIVATE_KEY="99c57950642f7b144f25863cebbd4861d0ada707bceb4258c705dddd7b2df7d8";
const INFURA_API_KEY="1b604dd887ff4cf3b6c182e824187929";
module.exports = {
  defaultNetwork:"sepolia",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  solidity: "0.8.19",
};
