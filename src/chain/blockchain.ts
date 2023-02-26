import Block from "./block.js"
  export default class Blockchain {
    chain: Block[];
    blockLimitTracsaction: number;
    constructor() {
      this.blockLimitTracsaction = 10;
      this.chain = [this.createFirstBlock()];
    }
  
    createFirstBlock():Block {
      return new Block(Date.now(), [], "0");
    }
  
    getLatestBlock():Block {
      return this.chain[this.chain.length - 1];
    }
  
    addBlock(newBlock: Block):void {
      if(newBlock.data.length < this.blockLimitTracsaction) throw new Error("Block can storage more transaction, Aborting");
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.calcHash();
      this.chain.push(newBlock);
    }
  
    isChainValid():boolean {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
  
        if (currentBlock.hash !== currentBlock.calcHash()) {
          return false;
        }
  
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }
  
      return true;
    }
}