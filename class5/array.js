class CustomArray {
    constructor(){
        this.length=0;
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.data
    }
    pop(){
        const element = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--;
        return element
    }
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index)
        return item
    }
    shiftIndex(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1]
        this.length--;
    }
    unshift(newElement){
        if(!newElement){
            return this.length
        }
        for (let i = this.length-1; i >= 0; i--) {
            this.data[i+1] = this.data[i];
        }
        this.data[0] = newElement
        this.length++;
        
        return this.length
    }
    shift(){
        if(!this.length) return undefined
        const element = this.data[0]
        delete this.data[0]
        this.length--;
        for(let i=0;i<this.length;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length]
        return element
    }
}
const arr = new CustomArray()
arr.push("Name1")
arr.push("Name2")
arr.push("Name3")
arr.push("Name4")
console.log(arr.pop())

console.log(arr.data)
arr.delete(0)
console.log(arr.data)
arr.push("Name5")
arr.shiftIndex(1)
console.log(arr.data)
arr.unshift("Name0")
console.log(arr.data)
arr.shift()
console.log(arr.data)