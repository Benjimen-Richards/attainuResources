#Given a no n print the sum of numbers from 1 to n. Do it using recursion.
#eg n = 5 sol = 1 + 2 + 3 + 4 + 5
def additionrecursion(n):
    if n<=0:
        return 0
    else:
        return n+additionrecursion(n-1)
a=int(input("enter a number you want to sum up with itself\n"))
print(additionrecursion(a))