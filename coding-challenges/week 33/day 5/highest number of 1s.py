
def row(arr, ans):
    count = 0
    for i in arr:
        if i == 1:
            count += 1
    return ans.append(count)


ans = []
mat = mat = [[0, 0, 0, 1],
             [0, 1, 1, 1],
             [1, 1, 1, 1],
             [0, 0, 0, 0]]

for i in mat:
    row(i, ans)
print("Max number of 1s in the matrix row is  ", ans.index(max(ans)))
