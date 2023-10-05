"use strict";

class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }
  get balance() {
    return `${this._balance} kr.`;
  }
  withdraw(amount) {
    if (amount > this._balance) throw new Error("Not enough money on this account");
    return (this._balance -= amount);
  }
  deposit(amount) {
    return (this._balance += amount);
  }
}

const myAccount = new Account("Lise", 1000005);

console.log(myAccount);
console.log(myAccount.balance);
myAccount.withdraw(5);
console.log(myAccount.balance);
myAccount.deposit(123123);
console.log(myAccount.balance);

class CheckingsAccount extends Account {
  constructor(owner, balance) {
    super(owner, balance);
  }
}
