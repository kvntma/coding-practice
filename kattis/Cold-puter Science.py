N = int(input())
res = list(map(int, input().split(' ')))
print(len([t for t in res if t < 0]))
