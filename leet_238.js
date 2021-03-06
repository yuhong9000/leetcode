/**
https://leetcode.com/problems/product-of-array-except-self/description/
238. Product of Array Except Self
Given an array nums of n integers where n > 1,
return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity?
(The output array does not count as extra space for the purpose of space complexity analysis.)

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    const ans = [];
    ans.length = nums.length;
    ans[0] = 1;

    for(let i = 1; i < nums.length; i++){
        ans[i] = ans[i-1]*nums[i-1];
    }

    for(let i = nums.length-1; i >= 1; i--){
        ans[i] *= ans[0];
        ans[0] *= nums[i];
    }

    return ans;
};
