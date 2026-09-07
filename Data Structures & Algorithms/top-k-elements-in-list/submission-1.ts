class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const count = new Map<number, number>();

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1)
        }

        // create array for buckets
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => [])

        // sort into buckets
        for (const [num, freq] of count) {
            buckets[freq].push(num)
        }

        const result: number[] = [] 
        console.log(buckets)

        // grab last k elements
        for (let freq: number = buckets.length - 1; freq >= 0 && result.length < k; freq--) {

            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) return result
            }

        }

        return result

    }
}
