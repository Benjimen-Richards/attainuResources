
def  solve(d,idx,res):
  if idx==len(d):
    print(res)
    return
  res.append(d[idx])
  solve(d,idx+1,res)
  res.pop()
  solve(d,idx+1,res)
a=int(input('1'))
while(a>0):
  b=int(input('2'))
  d=list(map(int,input('3').split()))
  d = list(dict.fromkeys(d))
  idx=0
  res=[]
  b=solve(d,idx,res)
  a-=1