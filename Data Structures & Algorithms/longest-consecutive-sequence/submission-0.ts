class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const numSet: Set<number> = new Set(nums)
        let longestSeq: number = 0

        for (const num of numSet) {

            let length: number = 0

            // find start of sequence
            if (!numSet.has(num - 1)) {

                while (numSet.has(num + length)) {
                    length++
                }

            }

            longestSeq = longestSeq < length ? length : longestSeq

        }

        return longestSeq 

    }
}
