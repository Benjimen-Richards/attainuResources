def n(x:int):
    a=abs(x)
    rev=(str(a))
    rev=int(rev[::-1])
    if rev.bit_length()<32:
        if(x<0):
            return -rev
        else:
            return rev
if __name__ == "__main__":
    a=int(input(("enter a number\n")))
    n(a)
    print(n(a))