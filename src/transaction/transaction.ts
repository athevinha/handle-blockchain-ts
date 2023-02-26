import {  sha256 } from "js-sha256";
export default class Transaction {
    fromAddress: string;
    toAddress: string;
    amount: number;
    timestamp: number;

      constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.timestamp = Date.now();
      }
    
      calcHash():string {
        return sha256(
          this.fromAddress +
            this.toAddress +
            this.amount.toString() +
            this.timestamp.toString()
        ).toString();
      }

  
    }