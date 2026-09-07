class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const hash = { ')': '(', '}': '{', ']': '[' }
        let stack = []

        for (const c of s) {
            if ([')', '}', ']'].includes(c)) {
                if (stack[stack.length - 1] === hash[c]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0


    }
}
