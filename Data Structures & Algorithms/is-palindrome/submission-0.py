class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            rChar = s[r].lower()
            lChar = s[l].lower()

            # check r char
            if not self.alphaNum(rChar):
                r -= 1
                continue

            # check l char
            if not self.alphaNum(lChar):
                l += 1
                continue 
            
            if (lChar != rChar):
                return False
            
            l, r = l + 1, r - 1
        
        return True
            


    def alphaNum(self, char: str) -> bool:
        return (ord('a') <= ord(char) <= ord('z') or
                ord('0') <= ord(char) <= ord('9'))