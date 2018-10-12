/**
https://leetcode.com/problems/merge-sorted-array/description/
88. Merge Sorted Array
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;

    for(let k = m + n - 1; k >= 0; k--){
        if(j >= 0 && (i < 0 || nums2[j] > nums1[i])){
            nums1[k] = nums2[j];
            j--;
        }
        else{
            nums1[k] = nums1[i];
            i--;
        }
    }
};
