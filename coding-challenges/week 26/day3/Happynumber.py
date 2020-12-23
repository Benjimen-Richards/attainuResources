def ishappynumber(n):
    res = [int(i) for i in str(n)]
    # print(res)
    sum_nums = set()
    while sum(res) != 1:
        sum_num = sum([int(i) ** 2 for i in res])
        print(sum_num)
        if sum_num in sum_nums:
            return False
        sum_nums.add(sum_num)
        res = [int(i) for i in str(sum_num)]

    return True


if __name__ == "__main__":
    number = 19
    res = []
    print(ishappynumber(number))
