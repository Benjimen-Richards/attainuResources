def solve(num, rev):
    while num:
        temp = num % 10
        rev = rev * 10 + temp
        num = num//10
    return rev


if __name__ == "__main__":
    num = -321
    rev = 0
    if(num > 0):
        ans = solve(num, rev)
    else:
        num = num * -1
        ans = -1*solve(num, rev)
    print(ans)
