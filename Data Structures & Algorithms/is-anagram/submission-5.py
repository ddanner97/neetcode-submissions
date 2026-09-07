class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        string1, string2 = {}, {}

        for index, char in enumerate(s):
            string1[s[index]] = 1 + string1.get(s[index], 0)
            string2[t[index]] = 1 + string2.get(t[index], 0)
        
        return string1 == string2
      
        