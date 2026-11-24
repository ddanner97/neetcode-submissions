class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {

        return helper(nums, target, 0, nums.length - 1)

        function helper(nums: number[], target: number, left: number, right: number) {


            if (left > right) {
                return -1
            }

            const mid: number = Math.floor((right - left) / 2) + left

            if (nums[mid] === target) {
                return mid
            } 

            // if left side is sorted
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target <= nums[mid]) {
                    return helper(nums, target, left, mid - 1)
                } else {
                    return helper(nums, target, mid + 1, right)
                }
            } else {
                if (target >= nums[mid] && target <= nums[right]) {
                    return helper(nums, target, mid + 1, right)
                } else {
                    return helper(nums, target, left, mid - 1) 
                }
            }

        }

    }
}
