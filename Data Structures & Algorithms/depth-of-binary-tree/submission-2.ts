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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {

        let max: number = 0 
        let left: number = 0
        let right: number = 0

        if (!root) return 0

        left = this.maxDepth(root.left)
        right = this.maxDepth(root.right)
 

        return 1 + Math.max(left, right)

    }
}
