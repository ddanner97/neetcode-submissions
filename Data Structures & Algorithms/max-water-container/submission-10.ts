class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let max: number = 0
        let lptr: number = 0
        let rptr: number = heights.length - 1

        while (lptr < rptr) {

            let width: number = rptr - lptr
            max = Math.max(max, width * Math.min(heights[rptr], heights[lptr]))

            console.log(heights[lptr])

            if (heights[lptr] >= heights[rptr]) {
                rptr--
            } else {
                lptr++
            }

        }

        return max

    }
}
