
if __name__ == "__main__":
    n=15
    for i in range(1,n+1):
        if i%3==0 and i%5==0:
             print("fizzbuzz ")
        elif(i%3==0):
            print("fizz")
        elif(i%5==0):
            print("buzz")
            buzz()
        elif(i%3==0) and (i%5==0):
            print("fizzbuzz")
        else:
            print(i)


     
    
