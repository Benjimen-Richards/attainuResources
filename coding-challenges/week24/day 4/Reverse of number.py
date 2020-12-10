if __name__ == "__main__":
    num = -432
    if(num > 0):
        rev = int(str(num)[::-1])
    else:
        rev = -1 * int(str(num)[1:][::-1])
    print(rev)
