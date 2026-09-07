class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString: string = ""

        // iterate through the list of strings
        // on each iteration - we want the length of the current string
        // then we will append the length # string[i] together 
        for (const string of strs) {
            const length: number = string.length
            encodedString += length + '#' + string
        }

        return encodedString

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let stringList: string[] = []
        let currCount: number = 0

        // iterate through the string 
        for (let i: number = 0; i < str.length; i++) {
            if (str[i] === '#') {
                const slice = str.slice(i + 1, (i + 1) + currCount)
                stringList.push(slice)
                i = i + currCount
                currCount = 0   
            } else {
                currCount = (currCount * 10) + Number(str[i])
            }
        }

        return stringList
    }
}
