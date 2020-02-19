import random

print("Welcome to the Roulette Table!")
print("     | 0  |    |")
print("| 1  |//2/|  3 |     1st Dozen:   1 - 12")
print("|//4/|  5 |//6/|     Even Numbers       ")
print("| 7  |//8/|  9 |     Low Numbers: 1 - 18")
print("|/10/|/11/| 12 |")
print("|/13/| 14 |/15/|     Black = |//X//|")
print("| 16 |/17/| 18 |     2nd Dozen:  13 - 24")
print("| 19 |/20/| 21 |     Red =   |  X  | ")
print("|/22/| 23 |/24/|")
print("| 25 |/26/| 27 |     3rd Dozen:  25 - 36")
print("|/28/|/29/| 30 |     Odd Numbers")
print("|/31/| 32 |/33/|     High Numbers: 19-36")
print("| 34 |/35/| 36 |")
print("| C1 | C2 | C3 |")

r = list(range(10))
print(r)

if 5 in r:
    print("yes")
else:
    print('no')
