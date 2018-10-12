/**
https://leetcode.com/problems/symmetric-tree/description/
101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
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
  * @return {boolean}
  */
 var isSymmetric = function(root) {
 //     if(root === null)
 //         return true;

 //     return isSymmetricHelper(root.left,root.right);
     return isSymmetricIterative(root);
 };

 var isSymmetricHelper = function(left,right) {
     if(!(left && right))
         return left === right;

     if(left.val !== right.val)
         return false;

     return isSymmetricHelper(left.right,right.left) && isSymmetricHelper(left.left,right.right);
 }

 var isSymmetricIterative = function(root){
     if(root === null)
         return true;

     const stack = [];
     stack.push([root.left,root.right]);

     while(stack.length > 0){
         const arr = stack.pop();
         const left = arr[0];
         const right = arr[1];

         if(!(left && right)){
             if(left !== right)
                 return false;
             else
                 continue;
         }
         else if(left.val !== right.val)
             return false;
         else if(left !== null && right !== null){
             stack.push([left.left,right.right]);
             stack.push([left.right,right.left]);
         }
     }
     return true;
 }
