#Find first and last positions of an element in a sorted array
def  occurance(arr,n,num):
    first=0
    last=0
    for i in range(n):
        if num!=arr[i]:
            continue
        if first==False:
            first=i
        last=i     #1 3 5 5 5 5 7 123 125
    if first>0:
        print(first,last)

if __name__ == "__main__":
    t=int(input())
    size,target=map(int,input().strip().split())
    for i in range(0,t):
        array=list(map(int,input().strip().split()))
        if target in array:
            occurance(array,len(array),target)
        else:
            print('-1')
        
