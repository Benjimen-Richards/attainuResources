#1 answer

d = {'x': 10, 'y': 20, 'z': 30} 
for dict_key, dict_value in d.items():
    print(dict_key,'->',dict_value)
    
# 2 

n = int(input("Input a number "))
d = dict()

for x in range(1, n+1):
    d[x] = x*x

print(d)



