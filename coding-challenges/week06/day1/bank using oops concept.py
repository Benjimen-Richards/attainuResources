#Implement a real life bank by using oops concepts. 
# Eg create classes as Bank, Depositor,Clerk, BankAccount

#example of auditing
class bank:
      def __init__(self,nameofbank,area):
            self.nameofbank=nameofbank
            self.area=area
      def print_bank_details(self):
         print(f"'Bank name is {self.nameofbank} and located at {self.area}'")

class depositer(bank):
      def __init__(self,numberofaccounts,deposit):
            self.name=name
            self.deposit=deposit
      def print_numberofdepositers(self):
         for i in range(len(name)):
            print(f"'{self.name[i]} has deposited {self.deposit[i]} rupees'")
         print(f"'Total amount deposited in the bank is {sum(self.deposit)}'")

          
class clerk(bank):
      def __init__(self,name,salary,totalworkinghours):
            self.name=name
            self.salary=salary
            self.totalworkinghours=totalworkinghours
      def print_workinghours(self):
            x=len(name)
            for i in range(x):
               print(f"'{self.name[i]} has salary of {self.salary[i]} and works for {self.totalworkinghours[i]}'")
            print(f"'Total salary spend on salaries for clerks is {sum(self.salary)}'")
class bankaccount(bank):
            def __init__(self,typeofaccounts):
                  self.typeofaccounts=typeofaccounts
            def print_typeofaccounts(self):
                  print(f"'Total types of accounts in the bank are {self.typeofaccounts}'")
          
               
if __name__ == "__main__":
      name,area=input("Bank name and Area\n").split()
      b=bank(name,area)
      n=int(input('Total number of depostors\n'))
      name=[]
      amount=[]
      for i in range(n):
         x,y=input("Name of the depositer and amount deposited\n").split()
         name.append(x)
         amount.append(int(y))
      d=depositer(name,amount)
      n=int(input('Number of clerks\n'))
      s=[]
      w=[]
      name=[]
      for i in range(n):
         nam,salary,hours=map(str,input("enter name salary and hours of work of clerk\n").split())
         name.append(nam)
         s.append(int(salary))
         w.append(int(hours))
      c=clerk(name,s,w)
      baccount=bankaccount(3)
      print("'THE AUDITING REPORT OF BANK RESPECTIVE MONTH IS'")
      b.print_bank_details()          
      d.print_numberofdepositers()
      c.print_workinghours()           
      baccount.print_typeofaccounts()
   




      
      
   