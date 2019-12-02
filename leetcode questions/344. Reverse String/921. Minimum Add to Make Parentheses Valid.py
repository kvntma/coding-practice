S = "()"
print(len(S))
c = 0
for i in range(len(S)):
    if S[i] == "(" and S[i + 1] == ")" and S[i] != S[:-1]:
        c += 1
        print(c, "check")
    elif S[i] == ")" and S[i - 1] == "(":
        c += 1
print (len(S) - c)