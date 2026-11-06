class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {

        let slow: number = 0
        let fast: number = 0

        do {

            slow = nums[slow]
            fast = nums[nums[fast]]

        } while (fast !== slow)

        slow = 0

        while (fast !== slow) {

            slow = nums[slow]
            fast = nums[fast]

        }

        return fast

    }
}
