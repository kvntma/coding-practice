from random import *

def do_twice(f, num):
    for i in num:
        print f

def print_twice(s):
    print(s)
    print(s)


print(do_twice(print_spam))
