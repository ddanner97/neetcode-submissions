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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        // At every node - we need to check both the right and left side of the node
        // so every node has two nodes beneath to check

        const hash: Map<number, number[]> = new Map()
        hash.set(0, [root.val])

        if (root.left === null && root.right === null) return [...hash.values()]

        const result = this.checkNextNodes(root, 1, hash).values()

        return [...result]

    }

    checkNextNodes(root: TreeNode, level: number, hash: Map<number, number[]>): Map<number, number[]> {

        if (root.left !== null  && root.right !== null) {
             //add left and right nodes]
            hash[level] = hash.has(level) ? hash.get(level)!.push(root.left.val, root.right.val) : hash.set(level, [root.left.val, root.right.val])
            this.checkNextNodes(root.left, level + 1, hash)
            this.checkNextNodes(root.right, level + 1, hash)
            return hash
        } else if (root.left !== null && root.right === null) {
           hash[level] = hash.has(level) ? hash.get(level)!.push(root.left.val) : hash.set(level, [root.left.val])
            this.checkNextNodes(root.left, level + 1, hash)
           return hash
        } else if (root.left === null && root.right !== null) {
            hash[level] = hash.has(level) ? hash.get(level)!.push(root.right.val) : hash.set(level, [root.right.val])
            this.checkNextNodes(root.right, level + 1, hash)
            return hash
        }
    }
}
