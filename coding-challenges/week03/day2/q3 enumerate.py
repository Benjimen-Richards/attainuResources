#Write a Python script to generate and print a dictionary
# that contains a number (between 1 and n) in the form (x, x*x).
n=int(10)
x=[i for i in range(1,n+1)]
print(x)
for y,x in enumerate(x,1):
    print(y,x*x)
