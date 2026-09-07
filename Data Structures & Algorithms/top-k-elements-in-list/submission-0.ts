class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const record: Record<string, number> = {}

        for (const c of nums) {
            record[c] = record[c] ? record[c] + 1 : 1
        }

        // sort
        const sortedRecord = Object.keys(record).sort((a, b) => record[b] - record[a]).slice(0, k)

        return sortedRecord.map((val) => Number(val))

    }
}
