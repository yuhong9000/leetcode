/*
https://leetcode.com/problems/add-two-numbers/description/
2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {

    return addThreeNumbers(l1,l2,0)
};

const addThreeNumbers = (l1,l2,carry) => {
    if(l1 === null & l2 === null){
        if(carry === 1){
            return new ListNode(1);
        }else{
            return null;
        }
    }

    const v1 = l1? l1.val:0;
    const v2 = l2? l2.val:0;
    const node = new ListNode((v1+v2+carry) % 10);
    carry = Math.floor((v1+v2+carry) / 10);
    node.next = addThreeNumbers(l1?l1.next:null,l2?l2.next:null,carry);

    return node;
}
