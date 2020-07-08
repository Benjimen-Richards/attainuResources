#Question 2: Write a program which takes an input n(no of rows) and will print the pattern like




if __name__ == "__main__":
    
    a=int(input("enter a value \n"))
for i in range(1,a+1): #moves by row
    for j in range(1,i+1):#moves by column
        print(j,end=(""))
        
    print("\n")

    
