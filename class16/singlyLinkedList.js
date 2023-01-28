let singleLinkedListExample = {
    head:{
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value:4,
                    next: {
                        value:5,
                        next: null
                    }
                }
            }
        }
    }
}

class Node {
    constructor(value,next = null){
        this.value = value;
        this.next = next
    }
}

class CustomSinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null
        }
        this.tail = this.head;

        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this
    }
    prepend(value){
        const newNode = new Node(value,this.head)
        this.head = newNode
        this.length++;
        return this
    }
    insert(index,value){
        if(index>=this.length){
            return this.append(value)
        }
        const previousNode = this.getNodeByIndex(index - 1)
        const nextNode = previousNode.next
        const newNode = new Node(value,nextNode)
        previousNode.next = newNode
        this.length++;
        return this;
    }
    getNodeByIndex(index){
        let counter = 0;
        let currentNode = this.head
        while(counter!==index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    remove(index){
        if(index >=this.length){
            return this.remove(this.length)
        }
        if(!index){
            this.head = this.head.next
            this.length--
            return this
        }
        let previousNode = this.getNodeByIndex(index-1)
        previousNode.next = previousNode.next.next
        this.length--;
        return this
    }
    getNodeByValue(value){
        let found = false
        let currentNode = this.head
        while(!found){
            if(currentNode.value==value || !currentNode.next){
                found=true
            }
            currentNode = currentNode.next
        }
        return currentNode || undefined
    }
}
const linkedList = new CustomSinglyLinkedList(1)
linkedList.append(5)
console.log(JSON.stringify(linkedList.prepend(3), null, 4))
console.log(JSON.stringify(linkedList.insert(6,10), null, 4))
console.log(JSON.stringify(linkedList.insert(1,99), null, 4))
console.log(JSON.stringify(linkedList.remove(0)),null,4)
console.log(JSON.stringify(linkedList.getNodeByValue(99),null,4))
console.log(JSON.stringify(linkedList.getNodeByValue(48),null,4))