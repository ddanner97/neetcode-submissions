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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {

        if (!head) return 

        const nodes: ListNode[] = []
        let cur: ListNode | null = head

        while (cur !== null) {
            nodes.push(cur)
            cur = cur.next
        }

        // create left and right pointers
        let left: number = 0
        let right: number = nodes.length - 1

        while (left < right) {

       
            nodes[left].next = nodes[right]
            left++
        
            if (left === right) break;

            nodes[right].next = nodes[left]
            right--
                      

        }

        nodes[left].next = null;

    }
}
