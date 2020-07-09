#print prime number 

a=int(input("enter a number to check if its prime or not\n"))
i=0
if(a>2):
    for i in range(2,a):
        if(a%i==0):
            print("Entered number is not a prime becoz",i,"times",a//i,"=",a)
            break
    else:
            print("number is prime")
elif((a==1) or (a==2)):
            print("number is prime by itself")



    