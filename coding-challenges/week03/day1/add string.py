a='123'
b='456'
array=[a,b]
print(array)
map={'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}
sumarray=[]
v=0
for i in array:
    num=0
    for char in i:
        num=num*10+map[char]
    sumarray.append(num)
    v+=1
sum=sumarray[0]+sumarray[1]
print(str(sum))
