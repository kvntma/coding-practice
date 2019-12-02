class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
        lst = list({i for i in J})
        count = 0
        for i in lst:
            if S.count(i) >= 0:
                count += S.count(i)
        return count
