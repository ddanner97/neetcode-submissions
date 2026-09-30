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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {

        let count: number = 0

        function dfs(node: ListNode | null): ListNode | null {
            if (!node) return null; // once end is reached return null
            node.next = dfs(node.next) // parent re-links to whatever the child returns
            count++ // unwinding: this node is count-th from the end
            if (count === n) return node.next // skip this code
            return node
        }

        return dfs(head)

    }
}
