/**
https://leetcode.com/problems/binary-tree-inorder-traversal/description/
94. Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const stack = [];
    const result = [];
    const set = new Set();

    stack.push(root);

    while(stack.length > 0){
        let node = stack.pop();
        if(node === null)
            continue;
        if(node.right !== null && !set.has(node)){
            stack.push(node.right);
        }
        stack.push(node);
        if(node.left !== null && !set.has(node)){
            stack.push(node.left);
        }else{
            node = stack.pop();
            result.push(node.val);
        }
        set.add(node);
    }

    return result;
};
