import {sha256} from "js-sha256";
import Transaction from "../transaction/transaction.js";
export default class Block {
    timestamp: number;
    data: Transaction[];
    previousHash: string;
    hash: string;

    constructor(timestamp = 0, data = [], previousHash = "") {
        this.timestamp = timestamp;
        this.data = data; 
        this.previousHash = previousHash;
        this.hash = this.calcHash()
    } 

    calcHash():string{
        return sha256(this.previousHash + this.timestamp + JSON.stringify(this.data));
    } 
}
  