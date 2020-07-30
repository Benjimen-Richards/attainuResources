#adding of number in o(n2)
def sum(a,t):
    n=len(a)
    for i in range(n):
        for j in range(i,n):
            sum=a[i]+a[j]
            if sum==t:
                return [i,j]
            else:
                return 'no element adds up to target'
if __name__ == "__main__":
    a=list(map(int,input('enter a list').split()))
    target=int(input('sum element'))
    print(sum(a,target))