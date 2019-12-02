# Python3 program to find Maximum difference
# between two elements such that larger
# element appears after the smaller number

# The function assumes that there are
# at least two elements in array. The
# function returns a negative value if
# the array is sorted in decreasing
# order and returns 0 if elements are equal
def maxDiff(arr, n):
    # Initialize diff, current
    # sum and max sum
    diff = arr[1] - arr[0] #-6
    curr_sum = diff #-6
    max_sum = curr_sum #-6


    for i in range(1, n - 1):

        # Calculate current diff
        diff = arr[i + 1] - arr[i] #4 #-2
        print(diff, "!")
        # Calculate current sum
        if (curr_sum > 0):  #-6  #4
            curr_sum += diff
        else:
            curr_sum = diff  #4
        print(curr_sum, "c")
        # Update max sum, if needed
        if (curr_sum > max_sum):
            max_sum = curr_sum
            print(max_sum) #4
    return max_sum


# Driver Code
if __name__ == '__main__':
    arr = [80, 2, 6, 3, 100, 1, 104]
    n = len(arr)

    # Function calling
    print("Maximum difference is",
          maxDiff(arr, n))

# This code is contributed
# by 29AjayKumar
