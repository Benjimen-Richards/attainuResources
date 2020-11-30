# Given an unsorted integer array nums, find the smallest missing positive integer

def Totolnumberarray(arr, size):
    j = 0
    for i in range(size):
        if (arr[i] <= 0):
            arr[i], arr[j] = arr[j], arr[i]
            j += 1
    return j


def positive_number(arr, size):
    for i in range(size):
        if (abs(arr[i]) - 1 < size and arr[abs(arr[i]) - 1] > 0):
            arr[abs(arr[i]) - 1] = -arr[abs(arr[i]) - 1]

    for i in range(size):
        if (arr[i] > 0):

            return i + 1
    return size + 1


def findMissing(arr, size):

    shift = Totolnumberarray(arr, size)
    return positive_number(arr[shift:], size - shift)


arr = [1, 2, 0]
arr_size = len(arr)
missing = findMissing(arr, arr_size)
print("The smallest positive missing number is ", missing)
