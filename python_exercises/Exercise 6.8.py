def gcd(a, b):
    if a % b == 0:
        return a / b
    else:
        print(a, b)
        return gcd(b, a % b)

print(gcd(1071, 462))