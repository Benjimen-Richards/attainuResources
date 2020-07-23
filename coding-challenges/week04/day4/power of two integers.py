def recursion(a,b):
    if b==1:
        return a
    if b!=1:
        return (a*recursion(a,b-1))
        

if __name__ == "__main__":
    n,m=(input("enter two integers\n").split())
    n=int(n)
    m=int(m)
    print(recursion(n,m))