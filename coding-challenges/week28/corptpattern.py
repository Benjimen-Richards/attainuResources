def printTwoElements(arr, size):
    for i in range(size):
        if arr[abs(arr[i])-1] > 0:
            arr[abs(arr[i])-1] = -arr[abs(arr[i])-1]
        else:
            print("The repeating element is", abs(arr[i]))

    for i in range(size):
        if arr[i] > 0:
            print("The Missing element is", i + 1)


arr = [1, 2, 3, 5, 6, 5]
n = len(arr)
printTwoElements(arr, n)
