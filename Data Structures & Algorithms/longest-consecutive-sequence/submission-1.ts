class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const numSet: Set<number> = new Set(nums)
        let longestSequence: number = 0

        for (const num of numSet) {

            if (!numSet.has(num - 1)) {
                let length = 0

                while (numSet.has(num + length)) {

                    length++

                }

                longestSequence = longestSequence < length ? length : longestSequence

            }

        }

        return longestSequence

    }
}
