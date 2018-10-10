/**
https://leetcode.com/problems/jump-game/description/
55. Jump Game
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // define dp[i] = the furthest index one can reach from i
    if(nums.length === 0)
        return false;
    if(nums.length === 1)
        return true;

    const dp =[];
    dp[0] = nums[0];

    for(let i = 1; i < nums.length; i++){
        dp[i] = dp[i-1] <= i-1? 0 : i+nums[i] > dp[i-1]? i+nums[i] : dp[i-1];
    }

    return dp[nums.length-1] > 0
};
