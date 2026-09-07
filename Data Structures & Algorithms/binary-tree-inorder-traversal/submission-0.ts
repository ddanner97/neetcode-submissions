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
    inorderTraversal(root: TreeNode | null): number[] {

        const stack: number[] = []

        this.recursiveCall(root, stack)

        return stack

    }

    recursiveCall(root: TreeNode | null, stack: number[]) {
        if (root === null) return 

        this.recursiveCall(root.left, stack)
        
        // visit node
        stack.push(root.val)

        this.recursiveCall(root.right, stack)
    }
}
