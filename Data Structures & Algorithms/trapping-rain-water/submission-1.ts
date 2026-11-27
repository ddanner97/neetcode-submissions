class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        let total = 0, leftMax = 0, rightMax = 0
        let left = 0, right = height.length - 1

        while (left < right) {

            leftMax = Math.max(height[left], leftMax)
            rightMax = Math.max(height[right], rightMax)

            if (leftMax < rightMax) {
                total = total + (leftMax - height[left])
                left++
            } else {
                total = total + (rightMax - height[right])
                right--
            }

        }

        return total

    }
}
