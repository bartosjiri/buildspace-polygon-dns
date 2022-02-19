const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  const domainContract = await domainContractFactory.deploy("rich");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  let txn = await domainContract.register("very", {value: hre.ethers.utils.parseEther('0.5')});
  await txn.wait();
  console.log("Minted domain very.rich");

  txn = await domainContract.setRecord("very", "I paid in MATIC for this!");
  await txn.wait();
  console.log("Set record for very.rich");

  const address = await domainContract.getAddress("very");
  console.log("Owner of domain very:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();