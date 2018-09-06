/**
https://leetcode.com/problems/possible-bipartition/description/
886. Possible Bipartition
Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group.

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.



Example 1:

Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:

Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
*/
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    const map = {};

    for(let dislike of dislikes){
        const n1 = dislike[0];
        const n2 = dislike[1];

        if(map[n1]){
            map[n1].push(n2);
        }
        else{
            map[n1] = [n2];
        }
    }

    const color = {};
    const queue = [];

    queue.push(1);
    color[1] = 1;

    while(queue.length > 0){
        const u = queue.shift();
        const opposite_color = color[u] * -1;

        if(map[u])
            for(let v of map[u]){
                if(color[v] && color[v] !== opposite_color){
                    return false;
                }
                else if (!color[v]){
                    queue.push(v);
                    color[v] = opposite_color;
                }
            }
    }
    return true;
};
