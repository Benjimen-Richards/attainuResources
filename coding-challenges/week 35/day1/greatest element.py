# Given an array, print the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater element on the right side of x in array. Elements for which no greater element exist, consider next greater element as -1. Input: [4, 5, 2, 25] Output: 4 --> 5 5 --> 25 2 --> 25 25 --> -1 Time Complexity Required: O(n) Data structure to use: Stack

arr = [4, 5, 2, 25]
k = 0
greatest = max(arr)
for i in range(len(arr)):
    resarr = arr[i:len(arr)]
    temp = resarr[0]
    for j in resarr:
        if j > temp:
            print(temp, '-->', j)
            break
        if (j == greatest):
            print(temp, '-->', -1)
