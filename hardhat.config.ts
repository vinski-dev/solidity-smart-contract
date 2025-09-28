import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    base_sepolia: {
     accounts: [
      PRIVATE_KEY as string
      ],
      url: "https://sepolia.base.org",

    },
  },
};

export default config;
