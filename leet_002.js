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
