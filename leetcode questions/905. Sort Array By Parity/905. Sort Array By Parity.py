from typing import List

'''
This one has longer runtime because of operations. O(N) but uses more memory.

lst = []
for i in range(len(A) - 1, -1, -1):
    elif i % 2 != 0:
    lst.append(i)
    A.remove(i)
A.extend(lst)
return A




'''


#This one uses less memory and faster because you only iterate once w/o creating list.

i, j = 0, 0
while j < len(A):
    if A[j] % 2 == 0:
        A[i], A[j] = A[j], A[i]
        i += 1
    j += 1
return A