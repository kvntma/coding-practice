
S = "(()())(())"
opened = 0
res = []


for c in S:
    if c == '(' and opened > 0: res.append(c)
    if c == ')' and opened > 1: res.append(c)
    opened += 1 if c == '(' else -1


print("".join(res))