if __name__ == "__main__":
    num=int(input("enter a number\n"))
    r=0
    while(num):
        remainder=num%10
        r=(r*10)+remainder
        num=num//10
    print("reverse of a number ",r)
 