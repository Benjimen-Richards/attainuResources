def fizz():
    for i in range(1,n,3):
        print("fizz")
        break
def buzz():
    for j in range(1,n,5):
        print("buzz")
        break
if __name__ == "__main__":
    n=15
    for i in range(1,n+1):
        if(i%3==0):
            fizz()
        elif(i%5==0):
            buzz()
        elif(i%3==0) and (i%5==0):
            print("fizzbuzz")
        else:
            print(i)


     
    
