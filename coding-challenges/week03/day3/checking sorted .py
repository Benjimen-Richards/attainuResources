#checking string is sorted or not
if __name__ == "__main__":
   a=input("enter a string \n")
   arr=[int(x) for x in a]
   flag=""
   for i in range(0,len(a)):
      b=sorted(arr)
      for i in range(0,len(arr)):
         if(arr[i]==b[i]):
               flag="0"
         else:
               flag="1"
   if(flag=='0'):
      print(b)
      print("sorted")
      
   else:
      print(*arr)
      print('not sorted')
      
