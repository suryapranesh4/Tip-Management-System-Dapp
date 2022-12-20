require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/TEGFTwuYafPydalAbyww8Y9rPdY2iyI6",
            accounts: ["0xcdd0f8a3ac0551b1ef08582861222305a7266917c5ff548029fe88f5c9306f82"],
            allowUnlimitedContractSize: true,
        },
    },
}
