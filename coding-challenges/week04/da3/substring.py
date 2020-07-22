def substring(s,n):
    list=[]
    for i in range(n):
        for j in range(i+1,n+1):
            a=s[i:j]
            list.append(a)
    return list

if __name__ == "__main__":
    a='abcd'
    print(substring(a,len(a)))