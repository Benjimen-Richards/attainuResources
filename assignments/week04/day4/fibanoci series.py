def fibanaco(n):
    if n<=1:
        return n
    else:
        return fibanaco(n-1)+fibanaco(n-2)
a=int(input("enter a number"))
if a<0:
    print("enter a valid number")
else:
    for i in range(a):
        print(fibanaco(i))