/**
https://leetcode.com/problems/longest-univalue-path/description/
687. Longest Univalue Path
Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

Note: The length of path between two nodes is represented by the number of edges between them.

Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output:

2
Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output:

2
Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const longestUnivaluePath = function(root) {
    let max = 0;

    const checkNode = (node,current_value) => {
        if(node){
            const val = longestUnivaluePathUtil(node);
            if(node.val === current_value){
                return 1 + val;
            }
        }
        return 0;
    };

    const longestUnivaluePathUtil = (root) => {

        if(root === null || (root.left === null && root.right === null))
            return 0;

        let left = checkNode(root.left,root.val);
        let right = checkNode(root.right,root.val);

        max = Math.max(left+right,max);
        return Math.max(left,right);
    };

    longestUnivaluePathUtil(root);
    return max;
};
