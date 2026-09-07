class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {

        const res: number[] = Array(temperatures.length).fill(0)
        const stack: number[] = []

        for (const tempIndex in temperatures) {

            if (stack.length === 0) {
                stack.push(Number(tempIndex))
                continue
            } else {

                while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[tempIndex]) {
                    res[stack[stack.length -1]] = Number(tempIndex) - stack[stack.length -1]
                    stack.pop()
                }

                stack.push(Number(tempIndex))

            }


        }

        return res

    }
}
