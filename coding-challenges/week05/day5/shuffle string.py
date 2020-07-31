#shuffle string 


#s = "codeleet", indices = [4,5,6,7,0,2,1,3]
string=input('string\n')
s=[str(x) for x in string]
indices=input('indices').strip('][').split(',')
d=dict(zip(indices,string))
indices.sort()
f=''
i=0
while i<len(s):
    f+=d.get(indices[i])
    i+=1
print(f)
