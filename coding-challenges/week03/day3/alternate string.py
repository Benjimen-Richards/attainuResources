#taking string numbers as input and printing the output as alternate string
def listtostring(s):
    str1=""
    for i in s:
        str1=str1+i
    return str1
def alternate(a):
    z=" "
    for i in range(0,len(a)):
        if(i%2==0):
            z=z+a[i]
    return z
if __name__ == "__main__":
    n=int(input("enter ur number\n"))
    list=[]
    for i in range(0,n):
        a=input("enter your score\n")
        list.append(a)
    list.sort()
    print(list)
    c=listtostring(list)
    print(alternate(c))
    