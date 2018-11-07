/*
399. Evaluate Division
Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].
The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
*/
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

class Graph {
    constructor() {
        this.vertices = new Set();
        this.edges = new Map();
    }

    addEdge(v,w,value){
        this.edges.get(v).set(w,value);
    }

    addVertex(v){
        if(!this.vertices.has(v)){
            this.vertices.add(v);
            this.edges.set(v,new Map());
        }
    }

    dfs(src,dest){
        const visited = new Set();

        const util = (src,dest,result) => {
            if(!this.vertices.has(src) || !this.vertices.has(dest))
                return -1.0;

            const ed = this.edges.get(src);
            if(ed.has(dest)){
                result *= ed.get(dest)
                return result;
            }
            for(const v of ed.keys()){
                if(!visited.has(v)){
                    visited.add(v);
                    const ans = util(v,dest,result*ed.get(v));
                    if(ans !== -1.0)
                        return ans;
                }
            }
            return -1.0;
        }

        return util(src,dest,1);
    }


}
var calcEquation = function(equations, values, queries) {
    const result = [];
    // generate graph
    let graph = new Graph();
    for(let i = 0; i < equations.length; i++){
        const a = equations[i][0];
        const b = equations[i][1];
        graph.addVertex(a);
        graph.addVertex(b);
        graph.addEdge(a,b,values[i]);
        graph.addEdge(b,a,1.0 / values[i]);
    }

    // iterate through queries, conduct dfs from start to end
    for(let i = 0; i < queries.length; i++){
        result.push(graph.dfs(queries[i][0],queries[i][1]));
    }

    return result;
};
