import { sha256 } from "js-sha256";

  export default class Wallets {
    wallets: wallet[];
    numWallets: number
    constructor(numWallets = 3) {
        this.numWallets = numWallets;
        this.wallets = [];
        for(let i = 0; i < this.numWallets; i ++) {
            const _wallet = new wallet("0x" + sha256("wallet" + i),100);
            this.wallets.push(_wallet);
        }
    }
  }
  
  class wallet {
    address: string;
    balance: number;
    constructor(address:string, balance: number ){
        this.address = address;
        this.balance = balance;
    }
  }