// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {

        const oldToNew = new Map<Node, Node>();

        for (let cur = head; cur; cur = cur.next) {
            oldToNew.set(cur, new Node(cur.val))
        }

        for (let cur = head; cur; cur = cur.next) {
            const copy = oldToNew.get(cur)!
            copy.next = cur.next ? oldToNew.get(cur.next)! : null
            copy.random = cur.random ? oldToNew.get(cur.random)! : null
        }

        return head ? oldToNew.get(head)! : null;

    }
}
