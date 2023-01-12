const {ethers} = require("hardhat")

async function main1() {

    console.log("Deploying Whitelist.sol...")

    const whitelistFactory = await ethers.getContractFactory("Whitelist")

    const whitelist = await whitelistFactory.deploy(10)

    await whitelist.deployed()

    console.log(`Whitelist contract deployed at: ${whitelist.address}`)

    console.log("-------------------------------")

}

main1()
.then(()=> process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})