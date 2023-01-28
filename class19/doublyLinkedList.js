class Node {
    constructor(value,next = null){
        this.value = value
        this.next = next
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value){
        const newNode = new Node(value)
        const currentHead = this.head
        currentHead.prev = newNode
        newNode.next = currentHead
        this.head = newNode
        this.length++
        return this
    }
    insert(index,value){
        if(this.index >= this.length){
            return this.append(value)
        }
        //TO-DO:
    }
    getNodeByIndex(){
        //TO-DO:
    }
    getNodeByValue(){
        //TO-DO:
    }
    remove(){
        //TO-DO:
    }
}
let newList = new DoublyLinkedList(1)
console.log(newList)
console.log(newList.append(3))
console.log(newList.insert(1,2))
console.log(newList.prepend(2))
