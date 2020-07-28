#1. Implement merge sort on your own and analyze its time complexity.


def merge(arr):
    if len(arr)==1:
        return 1
    mid=len(arr)//2
    l=arr[:mid]
    r=arr[mid:]
    merge(l)
    merge(r)
    i=j=k=0
    while i<len(l) and j <len(r):
        if l[i]<r[j]:
            arr[k]=l[i]
            i+=1
        else:
            arr[k]=r[j]
            j+=1
        k+=1
    while i<len(l):
        arr[k]=l[i]
        i+=1
        k+=1
    while j<len(r):
        arr[k]=r[j]
        j+=1
        k+=1
    
if __name__ == "__main__":
    n=int(input("testcases\n"))
    for i in range(n):
        size=int(input('length of array'))
        array=list(map(int,input().strip().split()))  
        if size==len(array):
            merge(array)
            print(*array)
        else:
            print('size of array is more than give size\n')
    