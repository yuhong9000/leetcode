/**
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
105. Construct Binary Tree from Preorder and Inorder Traversal
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return buildTreeHelper(inorder,preorder,0,0,inorder.length);
};

const buildTreeHelper = function(inorder,preorder,index,inorder_start,inorder_end){
    if(inorder_start >= inorder_end)
        return null;

    let node = new TreeNode(preorder[index]);

    let i = inorder.indexOf(node.val);
    // split inorder array into left and right arrays based on i
    // let left = inorder.slice(0,i);
    // let right = inorder.slice(i+1,inorder.length);

    node.left = buildTreeHelper(inorder,preorder,index+1,inorder_start,i);
    node.right = buildTreeHelper(inorder,preorder,index+i-inorder_start+1,i+1,inorder_end);

    return node;
}
