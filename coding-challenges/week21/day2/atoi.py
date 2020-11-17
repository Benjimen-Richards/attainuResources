def atoi(string):
    string = string.strip()
    sign = 0
    res = 0
    for i in string:
        if i.isdigit():
            # print(res)
            if i == '-':
                sign = i
            else:
                res = res*10 + int(i)
    if sign == '-':
        print(max(-2**32, -res))
    else:
        print(res)


if __name__ == "__main__":
    string = "4193 with words"
    atoi(string)
