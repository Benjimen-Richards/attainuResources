
def adjacentswap(list):
    if not list:
        return []
    for i in range(len(list)):
        if(i % 2 == 0):
            list[i], list[i+1] = list[i+1], list[i]
    return list


if __name__ == "__main__":
    list = [1, 2, 3, 4]
    print(adjacentswap(list))
