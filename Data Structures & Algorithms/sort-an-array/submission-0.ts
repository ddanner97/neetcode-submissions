class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {

        // [5, 10, 2, 1, 3]
        // a = 5 and b = 2
        // swap nums[a] = nums[b]

        for (const a in nums) {
            if (Number(a) === nums.length) return nums

            for (let b: number = Number(a) + 1; b < nums.length; b++) {
                if (nums[b] < nums[a]) {

                    // swap these
                    [nums[a], nums[b]] = [nums[b], nums[a]]

                }
            }

        }

        return nums

    }
}
