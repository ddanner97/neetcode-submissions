/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        let dummy = null
        let tmp: ListNode | null = dummy
        let next: ListNode | null = null

        while (head !== null) {

            next = head.next // grab the next node before re-assignment
            head.next = tmp 
            tmp = head
            head = next

        }

        return tmp

    }
}
