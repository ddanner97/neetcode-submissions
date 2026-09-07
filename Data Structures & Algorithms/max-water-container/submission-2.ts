class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let leftPtr: number = 0
        let rightPtr: number = heights.length - 1
        let max: number = 0

        while (leftPtr < rightPtr) {
            
            // calculate current max
            const width: number = rightPtr - leftPtr
            const height: number = Math.min(heights[leftPtr], heights[rightPtr])
            max = max < height * width ? height * width : max
            console.log(leftPtr, rightPtr)

            // move ptrs - left or right
            if (heights[leftPtr] < heights[rightPtr]) {
                leftPtr++
            } else {
                rightPtr--
            }
            
        }

        return max

    }
}
