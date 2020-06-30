nums = [8, 1, 2, 2, 3]
count = 0
res = []
for i in range(len(nums)):
    print(i)
    count = 0
    for j in nums:
        print(j)
        if nums[i] > j:
            count += 1
    res.append(count)

print(res)
