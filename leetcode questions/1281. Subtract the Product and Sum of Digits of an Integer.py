class Solution:
    def subtractProductAndSum(self, n):
        SUM, PRODUCT = 0, 1
        for i in str(n):
            SUM += int(i)
            PRODUCT *= int(i)
        return PRODUCT - SUM


'''
list_form = [int(x) for x in str(n)]
product = 1
for i in list_form:
    product_list *= i:
sum_n = sum(list_form)

print(product - sum_n)
'''
