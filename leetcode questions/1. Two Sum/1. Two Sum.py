'''
#Brute Force Method:
O time out.

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in nums:
          x = (nums.index(i) + 1)
          while x <= (len(nums) - 1):
            two_numbers = (i + nums[x])
            if two_numbers == target:
              return [nums.index(i), x]
            x += 1

'''


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for count, i in enumerate(nums):
            difference = (target - i)
            if difference in d:
                return d.get(difference), count
            d[i] = count
