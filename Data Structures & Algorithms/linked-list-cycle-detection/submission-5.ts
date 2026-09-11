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
    hasCycle(head: ListNode | null): boolean {

        let slowPtr: ListNode = head
        let fastPtr: ListNode = head

        while (fastPtr !== null && fastPtr.next !== null) {

            slowPtr = slowPtr.next
            fastPtr = fastPtr.next.next

            if (fastPtr === slowPtr) return true

        }

        return false

    }
}
