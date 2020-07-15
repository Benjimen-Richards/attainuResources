#checking string is sorted or not
if __name__ == "__main__":
   a=6
   c=[]
   for i in range(0,a):
      b=int(input("enter ur number\n"))
      c.append(b)
   print(c)
   flag=0
   i=1
   for i in range(1,len(c)):
      if(c[i-1]<=c[i]):
         flag=1
      else:
         flag=0
   if(flag==1):
      print("sorted")
   else:
      print("not sorted")