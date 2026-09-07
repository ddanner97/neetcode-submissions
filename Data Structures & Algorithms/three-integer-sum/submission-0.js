class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums = nums.sort((a, b) => a - b)
        const triplets = []

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i -1]) {
                continue;
            }

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                let total = nums[i] + nums[left] + nums[right]
                if (total === 0) {
                    const arr = []
                    arr.push(nums[i], nums[left], nums[right])
                    triplets.push(arr)

                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++
                    right--

                } else if (total > 0) {
                    right--;
                } else if (total < 0) {
                    left++;
                }
            }
        }

        return triplets

    }
}
