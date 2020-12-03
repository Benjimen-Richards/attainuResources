# lists = [[1,4,5],[1,3,4],[2,6]]
def solve(list, res):
    if not list:
        return []
    for i in list:
        for j in i:
            res.append(j)
    res.sort()  
    return res


if __name__ == "__main__":
    list = [[1, 4, 5], [1, 3, 4], [2, 6]]
    res = []
    print(solve(list, res))
    # print('->'.join(map(str, res)))
