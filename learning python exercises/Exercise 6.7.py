def is_divisible(a, b):
    if a == 1:
        return True
    elif a%b != 0:
        return False
    return is_divisible(a//b, b)

print (is_divisible(1004, 4))