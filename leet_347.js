/**
https://leetcode.com/problems/top-k-frequent-elements/description/
347. Top K Frequent Elements
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    // count the frequency for each unique element
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        }else{
            map[nums[i]] = 1;
        }
    }

    // sort
    const sorted = Object.keys(map).sort((a,b) => map[b] - map[a]).map((i) => parseInt(i));

    const results = [];
    // return top k elements
    for(let i = 0; i < k; i++){
        results[i] = sorted[i];
    }

    return results;
};
