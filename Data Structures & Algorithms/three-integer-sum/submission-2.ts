class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {

        const result: number[][] = []

        const sortedNums: number[] = nums.sort((a, b) => a - b)

        for (let i: number = 0; i < sortedNums.length - 2; i++) {

            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            let lPtr: number = i + 1;
            let rPtr: number = nums.length - 1

            while (lPtr < rPtr) {

                let sum: number = sortedNums[i] + sortedNums[lPtr] + sortedNums[rPtr]

                if (sum === 0) {
                    result.push([sortedNums[i], sortedNums[lPtr], sortedNums[rPtr]])
                    lPtr++
                    rPtr--
                    
                    while (lPtr < rPtr && sortedNums[lPtr] === sortedNums[lPtr - 1]) {
                        lPtr++
                    }

                } else if (sum > 0) {
                    rPtr--
                } else {
                    lPtr++
                }

            }

        }

        return result

    }
}
