




ary = [ 1, 2, 3, 6, 4,3]
n = 0

for i in range(len(ary)):
    n+=1
    if n not in ary:
        ary.append(n)
    else:
        ary.remove(n)
print(ary)
