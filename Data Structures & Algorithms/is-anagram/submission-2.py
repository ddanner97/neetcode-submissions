class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        string1 = {i: 0 for i in range(26)}
        string2 = {i: 0 for i in range(26)}

        for index, char in enumerate(s):
            print(index)
            string1[ord(char) - 97] += 1
            string2[ord(t[index]) - 97] += 1
        
        if string1 == string2:
            return True
        else:
            return False
        