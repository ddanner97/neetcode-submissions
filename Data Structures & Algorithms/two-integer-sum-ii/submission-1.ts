class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        let leftPtr: number = 0
        let rightPtr: number = numbers.length - 1

        while (leftPtr < rightPtr) {

            const sum: number = numbers[leftPtr] + numbers[rightPtr]

            if (sum === target) {
                return [leftPtr + 1, rightPtr + 1]
            } else if (sum < target) {
                // move left ptr
                leftPtr++
            } else if (sum > target) {
                // move right ptr
                rightPtr--
            }

        }

    }
}
