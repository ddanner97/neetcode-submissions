class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        // sorted in increasing order
        // need to return the index's + 1

        let left: number = 0
        let right: number = numbers.length - 1

        while (left < right) {

            const sum = numbers[left] + numbers[right]

            if (sum === target) {
                return [left + 1, right + 1]
            } else if (sum > target) {
                right--
            } else {
                left++
            }

        }

    }
}
