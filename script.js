class Stack {
  #_myStack;

  constructor() {
    this.#_myStack = [];
  }
  push(number) {
   return this.#_myStack.push(number);
  }
  pop() {
    return this.#_myStack.pop();
  }
  peek() {
    return this.#_myStack[this.#_myStack.length - 1];
  }
  count() {
    return this.#_myStack.length;
  }
  unshift(number) {
    // adds a number to the beggining of the array
    return this.#_myStack.unshift(number);
  }
  shift() {
    return this.#_myStack.shift();
  }
//   set myStack() {
//     return this.#_myStack
//   }
}

const stack1 = new Stack();

console.log(stack1);

stack1.push(1);
console.log(stack1);

stack1.push(2);
console.log(stack1);

mynumber = stack1.peek();
console.log(mynumber);

console.log(stack1.count());

stack1.unshift(-1);
console.log(stack1);

stack1.shift();
console.log(stack1);

class StackResetable extends Stack{
    // this.#_myStack;
    constructor() {}

    reset() {
        // this.#_myStack
    }
}