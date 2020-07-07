#Write a user driven program which will will ask users to input two no and perform some calculations

a=int(input("enter value for a\n"))
b=int(input("enter value for b \n"))
print("menu=\n1.addition\n2.subtration\n3.multiplying\n4.division\n")
c=int(input("enter ur choice between \n"))
if(c == 1):
    print("addition of a and b is",a+b)
elif(c == 2):
    print("subtraction of a and b is",a-b)
elif(c == 3):
    print("multplying of a and b is",a*b)
elif(c == 4):
    print("division of a and b is",int(a/b))
else:
    print("number is out of menu\n")
  
        
    