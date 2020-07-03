'''s = "Kevin"
x = ''
d = 0
while len(x) != 70:
    d += 1
    x = (' ' * d )+ s

print(x)

'''


def right_justify(name):
    name = name.rjust(70)
    return name

print(right_justify("kevin"))
