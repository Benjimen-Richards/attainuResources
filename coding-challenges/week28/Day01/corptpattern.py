




array = [ 1, 2, 3, 4, 5,3]
n = 0

for i in range(len(array)):
    n+=1
    if n not in array:
        array.append(n)
    else:
        array.remove(n)
print(array)
