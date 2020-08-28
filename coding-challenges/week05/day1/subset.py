
def  solve(d,idx,res):
  if idx==len(d):
    print(res)
    return
  res.append(d[idx])
  solve(d,idx+1,res)
  res.pop()
  solve(d,idx+1,res)
a=int(input('numer of test'))
while(a>0):
  b=int(input('size of array'))
  d=list(map(int,input('array').split()))
  d = list(dict.fromkeys(d))
  idx=0
  res=[]
  b=solve(d,idx,res)
  a-=1