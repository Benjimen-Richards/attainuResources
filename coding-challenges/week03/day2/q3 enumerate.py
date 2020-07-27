#Write a Python script to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).
n=int(input("enter a number\n"))
x=[i for i in range(1,n+1)]
if(n<10):
    for x,y in enumerate(x,1):
        print(x,x*x)
else:
    print("invalid according to question\n")