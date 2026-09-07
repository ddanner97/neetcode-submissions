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
     * @return {number[]}
     */
    preorderTraversal(root: TreeNode | null): number[] {

        const stack: number[] = []

        // recursive call
        this.callStack(root, stack)

        return stack

    }

    callStack(root: TreeNode | null, stack: number[]) {
        if (root === null) return

        stack.push(root.val)
        this.callStack(root.left, stack)
        this.callStack(root.right, stack)
    }
}
