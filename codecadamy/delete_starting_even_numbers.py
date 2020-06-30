def delete_starting_evens(lst):
    lst.reverse()
    for _ in range(len(lst)):
        if lst[-1] % 2 != 0:
            break
        lst.pop()
    return lst[::-1]


'''

def delete_starting_evens(lst):
    i = 0
    for num in lst:
        if num % 2 != 0:
            return lst[i:]
        i += 1
    return []
'''


print(delete_starting_evens([4, 8, 10, 11, 12, 15]))
print(delete_starting_evens([4, 8, 10]))
