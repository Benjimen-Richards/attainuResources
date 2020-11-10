def solve(number):
    rev = 0 
    temp = 0
    while number:
        temp  = number % 10
        rev = (rev * 10) + temp
        number = number // 10
    print(rev)

if __name__ == "__main__":
    number = 1234
    solve(number)