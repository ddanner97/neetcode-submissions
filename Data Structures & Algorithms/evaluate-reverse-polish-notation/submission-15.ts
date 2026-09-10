class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const operations: Set<string> = new Set(['-', '*', '+', '/'])
        const stack: number[] = []

        for (const token of tokens) {

            if (operations.has(token)) {

                const a: number = stack.pop()
                const b: number = stack.pop()

                switch (token) {
                    case '-':
                        stack.push(b - a)
                        break;
                    case '+':
                        stack.push(b + a)
                        break;
                    case '*':
                        stack.push(b * a)
                        break;
                    case '/':
                        stack.push(Math.trunc(b / a))
                        break
                }


            } else {
                stack.push(Number(token))
            }

        }

        return stack.pop()

    }
}
