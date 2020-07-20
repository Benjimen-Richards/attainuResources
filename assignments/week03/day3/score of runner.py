#Given the participants' score sheet for your University Sports Day, you are required t0
# find the runner-up score. You are given scores. Store them in a list and find the score of
#the runner-up.

n=int(input("enter number of score present in score sheet\n"))
scoresheet=[]
for i in range(1,n+1):
    print("enter score of ",i,"person")
    x=int(input())
    scoresheet.append(x)
scoresheet.sort()
b=list(dict.fromkeys(scoresheet))
print("runnerup=",b[-2])
for i in range(0,len(b)):
    print(b[i],'',end="")
