/**
https://leetcode.com/problems/merge-two-sorted-lists/description/
21. Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
/**
Draw the process first, then code.
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
var mergeTwoLists = function(l1, l2) {
    let n1 = l1;
    let n2 = l2;
    let current_node = new ListNode();
    let start = current_node;

    while(n1 !== null && n2 !== null){
        if(n1.val < n2.val){
            current_node.next = n1;
            n1 = n1.next;
        }else{
            current_node.next = n2;
            n2 = n2.next;
        }
        current_node = current_node.next;
    }

    if(n1 === null){
        current_node.next = n2;
    }else{
        current_node.next = n1;
    }
    return start.next;
};
