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

        const head: ListNode | null = new ListNode()
        let tmp: ListNode | null = head

        while (list1 && list2) {

            if (list1.val < list2.val) {
                tmp.next = list1
                list1 = list1.next
            } else if (list1.val >= list2.val) {
                tmp.next = list2
                list2 = list2.next
            }

            tmp = tmp.next

        }

        tmp.next = list1 === null ? list2 : list1

        return head.next

    }
}
