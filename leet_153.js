/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let stt = 0;
    let end = nums.length - 1;

    while(stt < end){
        const mid = Math.floor((end-stt)/2) + stt;
        if(nums[mid] > nums[stt]){
            if(nums[mid] < nums[end])
                break;
            else{
                stt = mid;
            }
        }
        else if(nums[mid] < nums[stt]){
            end = mid;
        }
        else{
            if(nums[stt] > nums[end])
                stt++
            else
                break;
        }
    }

    return nums[stt];
};
