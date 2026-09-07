class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        let stack: number[] = []

        for (const val of tokens) {

            if (['+', '-', '*', '/'].includes(val)) {

                const b = stack.pop()
                const a = stack.pop()
                // switch case and do the operation against total
                switch (val) {

                    case "+":
                        stack.push(a + b)
                        break;
                    case '-':
                        stack.push(a - b)
                        break;
                    case '*':
                        stack.push(a * b)
                        break;
                    case '/':
                        stack.push(Math.trunc(( a / b )))
                        break; 
            }         

            } else {

                stack.push(Number(val))

            }

        }

        return stack.pop()

    }
}
