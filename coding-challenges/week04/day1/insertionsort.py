def insertionsort(arr):
    for i in range(1,len(arr)):
        x=arr[i]
        j=i-1
        while j>=0 and x<arr[j]:
            arr[j+1]=arr[j]
            print(*arr)
            j-=1
        arr[j+1]=x
    print(*arr)
a=[2,4,6,8,3]
insertionsort(a)

