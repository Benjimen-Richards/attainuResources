list = [ ]
for i in range(8):
    char = input('enter letter')
    if char == '#':
        list.pop()
    else:
        list.append(char)

print(*list)

# "abc#d##c