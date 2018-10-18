/**
https://leetcode.com/problems/sort-array-by-parity-ii/description/
922. Sort Array By Parity II
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.



Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let even = 0, odd = 1;
    const result = [];

    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 === 0){
            result[even] = A[i];
            even+=2;
        }else{
            result[odd] = A[i];
            odd+=2;
        }
    }

    return result;
};
