import { network } from "hardhat";

async function main() {
    const { ethers } = await network.connect();

    const Kontrak = await ethers.getContractFactory("SupplyChainKopi");
    const kontrak = await Kontrak.deploy();
    await kontrak.waitForDeployment();
    console.log("Alamat Kontrak:", await kontrak.getAddress());
}
main().catch((e) => {
    console.error(e);
    process.exitCod
});


