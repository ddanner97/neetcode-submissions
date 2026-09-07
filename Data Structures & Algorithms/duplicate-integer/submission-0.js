class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()

        for (const value of nums) {
            if (seen.has(value)) {
                return true
            }
            seen.add(value)
        }

        return false
    }

}
