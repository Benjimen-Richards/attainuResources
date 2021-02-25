def solve(num, rev):
    while num > 0:
        rem = num % 10
        rev = (rev*10)+rem
        num = num//10
    return rev


a = -25123
rev = 0
if(a > 0):
    print(solve(a, rev))
else:
    a = a*-1
    print(-1*solve(a, rev))
