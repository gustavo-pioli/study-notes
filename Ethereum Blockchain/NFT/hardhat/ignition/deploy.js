async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const MyContract = await ethers.getContractFactory("TeddyBear");
    const myContract = await MyContract.deploy();

    console.log("Spacebear deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });