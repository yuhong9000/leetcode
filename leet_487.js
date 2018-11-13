/**
487. Max Consecutive Ones II
Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

Example 1:
Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let z = -1;
    let l = 0;
    let r = 0;
    let max = 0;

    while(r < nums.length){
        if(nums[r] === 1){
            r++;
        }
        else{
            if(z < 0){
                z = r;
                r++;
            }
            else{
                max = Math.max(max,r-l);
                l = z+1;
                z = r;
                r++;
            }
        }
    }
    return Math.max(max,r-l);
};
