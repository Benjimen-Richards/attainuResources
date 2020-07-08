num=int(input("enter a number to check if its prime \n"))
if(num>1):
    for i in range(2,num):
        if (num%i)==0:
            print("entered number is not prime")
            print("becoz",i,"*",num//i,"=",num)
            i+=1
            break
    else :
            print("given number is a prime number \n")
elif (num ==1):
        print("entered number is prime by itself that is '1'\n")
else:
    print("entered number contains negative integer number \n")