a=[[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
map={}
for i in a:
    if i[0] in map:
        map[i[0]].append(i[1])
    else:
        map[i[0]]=[i[1]]
print(map)
result=[]
for idx,v in map.items():
    v.sort(reverse=True)
    if len(v)>=5:
        average=v[:5]
    else:
        average=v
    map[idx]=int(sum(average)/len(average))
    result.append([idx,map[idx]])
print(result)