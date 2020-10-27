#code
def binarysearch(string,l,r,target):
    if l>r:
        return
    mid=(l+r)//2
    if string[mid]==target:
        return 1
    if string[mid]>target:
        return binarysearch(string,l,mid-1,target)
    else:
        return binarysearch(string,mid+1,r,target)
n=int(input("number of test\n"))
for i in range(n):
    for j in range(1):
        target=list(map(int,input("enter length of array and target\n").split(" ")))
        print("enter array elements",i+1)
        string=list(map(int,input().split(" ")))
        print(string)
        if len(string)>target[0]:
            print("enter equal size of elements\n")
        else:
            if target[1] in string:
                left=0
                right=len(string)
                print(binarysearch(string,left,right,target[1]))
            else:
                print("-1")
