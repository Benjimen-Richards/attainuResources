class solution:
   def answer(date:str)->int:
      a=date.split("-")
      day=int(a[0])
      month=int(a[1])
      year=int(a[2])
      if month==1:
         return day
      calender = [0,31,28,31,30,31,30,31,31,30,31,30,31]
      if(year%100!=0) or (year%4==0) and (year%100==0):
         calender[2]=29
      else:
         calender[2]=28
      d=0
      for i in range(0,month):
         d=d+calender[i]
      return d+day
   print(answer("01-03-2020"))