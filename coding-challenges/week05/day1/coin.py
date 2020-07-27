def richards(str,sum,idx,res):
	if sum==0:
		print(res)
		return
	if idx>=len(str):
		return
	if sum<0:
		return
	res.append(str[idx])
	sum-=str[idx]
	richards(str,sum,idx,res)
	res.pop()
	sum+=str[idx]
	richards(str,sum,idx+1,res)
if __name__ == '__main__':
	richards([1,2,3],10,0,[])