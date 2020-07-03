def check_fermat(a, b, c, n):
    if ((a ** n) + (b ** n)) == c ** n and n > 2:
        print("Holy smokes, Fermat was wrong!")
    else:
        print("No, that doesn't work")

def check_numbers():
    a = int(input("Choose number for a: \n"))
    b = int(input("Choose number for b: \n"))
    c = int(input("Choose number for c: \n"))
    n = int(input("Choose number for n: \n"))
    return check_fermat(a,b,c,n)

check_numbers()