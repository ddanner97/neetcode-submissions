class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {

        const nums2: number[] = nums
        nums.push(...nums2)

        return nums

    }
}
