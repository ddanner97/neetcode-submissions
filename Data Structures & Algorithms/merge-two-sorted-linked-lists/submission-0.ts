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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {

        let head: ListNode = new ListNode(0, null)
        let current: ListNode = head
        
        while(list1 !== null && list2 !== null) {

            if (list1.val <= list2.val) {

                current.next = list1
                current = current.next
                list1 = list1.next

            } else if (list1.val > list2.val) {

                current.next = list2
                current = current.next
                list2 = list2.next

            }

        }

        // now one list is out so we just attach the list ourselves
        current.next = list1 === null ? list2 : list1

        return head.next

    }
}
