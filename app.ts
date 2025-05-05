import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();

const BSC_NODE_URL = process.env.BSC_NODE_URL || "";
const web3 = new Web3(BSC_NODE_URL);

(async () => {
  try {
    const latestBlock = await web3.eth.getBlock("latest");
    console.log("Latest block:", latestBlock.number);

    const gasPrice = await web3.eth.getGasPrice();
    console.log("Current gas price:", web3.utils.fromWei(gasPrice, "gwei"), "Gwei");

    // Add more logic here to interact with BSC smart contracts or nodes
  } catch (error) {
    console.error("Error connecting to BSC node:", error);
  }
})();
