arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
for i in range(len(arr)):
    for j in range(i+1, len(arr)):
        if(arr[i] > arr[j]):
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
print(arr)
