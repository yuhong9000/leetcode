/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let n = nums.length-1;
    let lo=1;
    let hi=n;

    while(lo < hi){
        const mid = Math.floor((hi-lo)/2) + lo;
        if(check(nums,lo,mid) > mid-lo+1 )
            hi = mid;
        else
            lo = mid+1;
    }
    return lo;
};

const check = (nums, lo, hi) => {
    let count = 0;
    nums.forEach((x) => {
        if(x >= lo && x <= hi){
            count++;
        }
    })
    return count;
}
