import Blockchain from "./chain/blockchain.js"
import Block from "./chain/block.js";
import Transaction from "./transaction/transaction.js";
import Wallets from "./wallet/wallet.js";

const  _chain:Blockchain = new Blockchain();

const transactions: Transaction[] = [];
// have new tracsaction
const walletInstance: Wallets = new Wallets(10);
const wallets = walletInstance.wallets;
//fake transaction

for (let i = 1; i <= 20; i++) {
  const randomID = Math.floor(Math.random() * 8);
  const tracsactionAmount = 5
  const _transaction: Transaction = 
  new Transaction(
      wallets[randomID].address,
      wallets[randomID + 1].address, tracsactionAmount)
      transactions.push(_transaction)
  if(i % _chain.blockLimitTracsaction == 0){
    console.log(transactions.length)
    const _block: Block = new Block(Date.now(), transactions, "");
    _chain.addBlock(_block);
    console.log(_chain)
    transactions.splice(0,transactions.length)
  }
}


