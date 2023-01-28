class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            let currentNode = this.root
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
}
const customTree = new BinarySearchTree()
customTree.insert(3)
console.log(customTree)
customTree.insert(7)
console.log(customTree)