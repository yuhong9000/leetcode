/**
https://leetcode.com/problems/majority-element/description/
169. Majority Element
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    if(nums.length === 1)
        return nums[0];

    const map = {};

    for(let i = 0; i < nums.length; i++){
        if(nums[i] in map){
            if(++map[nums[i]] > nums.length/2)
                return nums[i];
        }
        else{
            map[nums[i]] = 1;
        }
    }
};
