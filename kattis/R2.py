import sys


def find_R2():
    n = sys.stdin.readline().split()
    r1 = int(n[0])
    s = int(n[1])
    r2 = (s*2) - r1
    return r2


print(find_R2())
