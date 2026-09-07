/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {

        const lowest: number = p.val < q.val ? p.val : q.val
        const highest: number = p.val > q.val ? p.val : q.val
        const currRoot: number = root.val

        if (currRoot >= lowest && currRoot <= highest) {
            return root
        } else if ( currRoot > lowest && currRoot > highest) {
            return (this.lowestCommonAncestor(root.left, p, q))
        } else {
            return (this.lowestCommonAncestor(root.right, p, q))
        }
    }
}
