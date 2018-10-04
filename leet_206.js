/**
https://leetcode.com/problems/reverse-linked-list/description/
206. Reverse Linked List
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null)
        return null;
    let current_node = head;
    let next_node = current_node.next;
    let next_next_node;
    while(next_node !== null){
        next_next_node = next_node.next
        next_node.next = current_node
        current_node = next_node
        next_node = next_next_node
    }
    head.next = null;
    return current_node;
};
