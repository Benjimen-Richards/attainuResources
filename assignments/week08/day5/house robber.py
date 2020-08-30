def total(nums):
    c,m=0,0
    for i in nums:
        print(f'1st c={c},m={m},i={i}')
        c,m=m,max(c+i,m)
    return m

if __name__ == "__main__":
    print(total([1,2,3,1]))