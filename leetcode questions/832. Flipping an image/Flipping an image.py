class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        a = 0
        b = len(A) - 1
        for i in range(len(A)):
            while a < b:
                A[i][a], A[i][b] = A[i][b], A[i][a]
                a += 1
                b -= 1
            a = 0
            b = len(A) - 1

        for q in range(len(A)):
            for w in range(len(A)):
                if A[q][w] == 1:
                    A[q][w] = 0
                else:
                    A[q][w] = 1
        return A

'''



class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        for i in range(len(A)):
            A[i].reverse()
            for j in range(len(A)):
                if A[i][j] == 0:
                    A[i][j] = 1
                else:
                    A[i][j] = 0
        return A



'''
