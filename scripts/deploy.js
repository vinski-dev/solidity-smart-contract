const hre = require("hardhat");

async function main() {
    const currentTimeStamp = Math.floor(Date.now() / 1000);
    const unlockTime = currentTimeStamp + 100;

    const lockedAmount = hre.ethers.parseEther("0.0001");
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, {
        value: lockedAmount,
    });
    
    await lock.waitForDeployment();

    console.log(`Lock with ${hre.ethers.formatEther(lockedAmount)} ETH deployed to ${await lock.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});