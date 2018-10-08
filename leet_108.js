/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return sortedArrayToBSTHelper(nums,0,nums.length-1)
};

var sortedArrayToBSTHelper = function(nums,start,end){
    let length = end - start + 1;
    if(length < 1)
        return null;

    let mid = start + Math.floor(length/2);
    let node = new TreeNode(nums[mid]);
    if(length === 1)
        return node;
    else{
        node.left = sortedArrayToBSTHelper(nums,start,mid-1);
        node.right = sortedArrayToBSTHelper(nums,mid+1,end);
    }
    return node;
}

var sortedArrayToBSTNonRecursive = function(nums) {
  if(nums.length < 1)
    return null;

  let mid = Math.floor(nums.length/2);
  let root = new TreeNode(nums[mid]);
  const stack = [];

  if(nums.length > 1){
    stack.push([root,'left',0,mid-1]);
    stack.push([root,'right',mid+1,nums.length-1]);
  }

  while(stack.length > 0){
    const arr = stack.pop();
    const node = arr[0];
    const child = arr[1];
    const start = arr[2];
    const end = arr[3];
    const length = end - start + 1;

    if(length < 1)
      continue;
    let mid = start + Math.floor(length/2);
    node[child] = new TreeNode(nums[mid]);
    if(length > 1){
        stack.push([node[child],'left',start,mid-1]);
        stack.push([node[child],'right',mid+1,end]);
    }
  }

  return root;
}
