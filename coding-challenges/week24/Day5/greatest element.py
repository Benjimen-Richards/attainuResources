if __name__ == "__main__":
    array = [4, 5, 2, 25, 32]
    for i in range(0, len(array)):
        res = -1
        for j in range(i+1, len(array)):
            if(array[i] < array[j]):
                res = array[j]
                break

        print(array[i], '===>', str(res))
