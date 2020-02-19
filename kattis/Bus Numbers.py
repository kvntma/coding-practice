#n = int(input())
m = sorted(map(int, input().split()))
m.append(9999)

res = []  # answer
current = m[0]  # placeholder
counter = 0  # counts the number of consecutives


for i in range(len(m)-1):
    if m[i] == (m[i+1]-1):
        counter += 1
        current = m[i+1 - counter]
    elif m[i] != (m[i+1]-1) and counter == 0:
        res.append(m[i])
    else:
        res.append(str(current) + "-" + str(m[i]))
        counter = 0

if counter != len(m)-1 and m[-1] not in res:
    res.append(m[-1])

if counter == len(m)-1:
    res.append(str(m[0]) + "-" + str(m[-1]))

res.pop()
print(" ".join(map(str, res)))
