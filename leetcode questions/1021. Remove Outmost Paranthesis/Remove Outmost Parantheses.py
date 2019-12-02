S = "(()())(())"
counter = 0
lst = []

for i in S:
    if i == "(" and counter > 0:
        lst.append(i)
    elif i == ")" and counter > 1:
        lst.append(i)
    if i == "(":
        counter += 1
    else:
        counter += -1


print("".join(lst))

print(counter)

