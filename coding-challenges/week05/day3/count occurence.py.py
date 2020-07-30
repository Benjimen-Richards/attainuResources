def occurence(a,b):
    count=0
    for i in range(0,len(a)):
        if a[i]==b:
            count+=1
    return count
    


if __name__ == "__main__":
    testcase=int(input("enter number of cases\n"))
    while testcase >0:
        size,number=map(int,input().split())
        array=list(map(int,input().strip().split()))
        if number in array:
            x=occurence(array,number)
            print(number,'occurs',x,'times in',*array)
        else:
            print(number,'is not present in',*array)