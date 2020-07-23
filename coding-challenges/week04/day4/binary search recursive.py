#code
def binarysearch(s,l,r,t):
    if l>r:
        return
    mid=(l+r)//2
    if s[mid]==t:
        return 1
    if s[mid]>t:
        return binarysearch(s,l,mid-1,t)
    elif s[mid]<t:
        return binarysearch(s,mid+1,r,t)
n=int(input("number of test\n"))
for i in range(n):
    for j in range(1):
        target=list(map(int,input("enter length of array and target\n").split(" ")))
        print("enter array elements",i+1)
        string=list(map(int,input().split(" ")))
        if len(string)>target[0]:
            print("enter equal size of elements\n")
        else:
            if target[1] in string:
                left=0
                right=len(string)
                print(binarysearch(string,left,right,target[1]))
            else:
                print("-1")
