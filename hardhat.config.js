require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://capable-still-knowledge.matic-testnet.discover.quiknode.pro/57a6ed7c71e095a27ce83b5c938e3b7e76aa1279/",
      accounts: ["52cc9c933861890944ee0b759059e5d364787c5cef63cb34153fc73de8daaf4e"],
    },
  },
};
