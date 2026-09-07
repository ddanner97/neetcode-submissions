class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //clean the string
        const string = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
        let start = 0
        let end = string.length - 1

        //Return false if string is not even
        if (string[start] !== string[end]) {
            return false
        }

        while (start <= end) {
           //compare start to end - if equal move pointers
           if (string[start] === string[end]) {
            start += 1
            end -= 1
            continue;
           } else if (string[start] != string[end]) {
            return false
           }

           console.log(start, end)
        }

        return true;
    }
}
