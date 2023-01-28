class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek(){
        return this.top
    }
    push(value){
        const newNode = new Node(value)
        if(!this.length){
            this.top = newNode
            this.bottom = newNode
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this
    }
}

const customStack = new Stack()
console.log(customStack.push(34))
console.log(customStack.push(33))
