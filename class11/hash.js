class HashTable {
    constructor(size){
        this.data = new Array(size)
    }
    hashMethod(key){
        let hash= 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash+key.charCodeAt(i)*1)%this.data.length
        }
        return hash
    }
    set(key,value){
        const address = this.hashMethod(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key,value])
        return this.data
    }
    get(key){
        const address = this.hashMethod(key) 
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0]=== key){
                    return currentBucket[i][1]
                }
            }
            return undefined
        }
    }
    delete(key){
        //delete element given its key
        const index = this.hashMethod(key)
        const maybeArray = this.data[index]
        let toDelete
        if(maybeArray && maybeArray.length){
            for(let i=0;i<maybeArray.length;i++){
                if(maybeArray[i][0]==key){
                    toDelete = [this.data[index][i],i]
                }
            }
            if(toDelete){
                this.data[index].splice([toDelete[1]],1)
                return toDelete[0]
            }
        }
    }
    getAllKeys(){
        const keys = []
        this.data.map((val,index,array)=>{
            if(val.length){
                val.map((v,i,a)=>{
                    keys.push(v[0])
                })
            }
        })
        return keys
    }
}

const customHash = new HashTable(50)
customHash.set("Mariana", 1998)
customHash.set("Adriana", 2000)
customHash.set("Diego", 1990)
console.log(customHash.getAllKeys())