class Graph{
    constructor(){
        this.nodes = 0
        this.adjacentList = {}
    }
    addVertex(node){
        this.adjacentList[node] = []
        this.nodes++
    }
    addEdge(node1,node2){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }
}

const customGraph = new Graph()
customGraph.addVertex("1")
customGraph.addVertex("3")
customGraph.addVertex("4")
customGraph.addVertex("5")
customGraph.addVertex("6")
customGraph.addVertex("8")
customGraph.addEdge("3","5")
customGraph.addEdge("6","3")
customGraph.addEdge("1","6")
customGraph.addEdge("1","3")
customGraph.addEdge("1","4")
customGraph.addEdge("4","5")
customGraph.addEdge("8","4")
console.log(customGraph)