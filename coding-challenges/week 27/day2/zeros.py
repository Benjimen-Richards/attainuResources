# Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).


if __name__ == "__main__":
    array = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]
    res = []
    ans = []
    for i in array:
        if not i:
            ans.append(i)
        else:
            res.append(i)
    print(res+ans)
