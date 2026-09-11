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

        if (head === null) return head

        let next: ListNode = null
        let last: ListNode = null

        while (head !== null) {

            next = head.next
            head.next = last
            last = head
            head = next


        }

        return last


    }
}
