class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }
    peek(){
        return this.first
    }
    enqueue(value){
        const newNode = new Node(value)
        if(!this.length){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
}
const customQueue = new Queue()
customQueue.enqueue(1)
console.log(customQueue)
customQueue.enqueue(2)
console.log(customQueue)
console.log(customQueue.peek())