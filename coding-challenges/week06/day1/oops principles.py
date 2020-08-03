#oops principles#

->oops has four major pillars
	1-polymorphism
	2-encapsulation
	3-inheritance
	4-abstraction
1->polymorphism->when one method is present in n number of classes where repeated representation is required
                  to to typed.in order to decrease the complexity of the program we use a global class 
                  class animal:
                     def __init__(self,name,age):
                        self.name=name
                        self.age=age
                     def show(self):
                        print(f'{self.name} is adopted since {self.age}')
                  class dog(animal):
                     def __init__(self,name,age):
                        self.name=name
                        self.age=age
                        
                     def brake(self):
                        print('i am lazy')
                  class random:                                   #global class 
                     def xyz(self,animal):
                        animal.brake(self)
                  if __name__ == "__main__":
                     a=animal('bruno',23)
                     r=random()
                     r.xyz(dog)
2->encapsulating->this defines the merging of two class and accessing 
      eg:
         class alfred:
            def __init__(self,name,age): #encapsulating
               self.name=name
               self.age=age
         if __name__ == "__main__":
             a=alfred('alfred',35)
             print(a.age)
3->inheritance->inheritance is the function of inheriting parent class methods to child class  
                  which does not involve any duplicate methods.
                  syntax=child_class(parent_class):
                  class animal:
                        def __init__(self,name,age):
                           self.name=name
                           self.age=age
                        def show(self):
                           print(f'{self.name} is adopted since {self.age}')
                  class dog(animal):
                     def __init__(self,name,age):
                        self.name=name
                        self.age=age
                        
                     def brake(self):
                        print('i am lazy')
                  if __name__ == "__main__":
                     d=dog('bruno',15)
                     d.show()
                     d.brake()
4->abstraction->this type of class is used to overwrite the existing parent class according to their requirements
               this leads to secure use of data or previous data   
               class first:
                  def __init__(self,name,age):
                     self.name=name
                     self.age=age
                  def show(self):
                     print(f'{self.name} is {self.age} years old')
                  def work(self):
                     print(f'{self.name} of {self.age} years works')
               class second(first):
                  def __init__(self,name,age):
                     self.name=name
                     self.age=age
                  def show(self):
                     print('yes')
                  def work(self):
                     print('alright')
               if __name__ == "__main__":
                  f=first('a',20)
                  f.show()                #parant class
                  f.work()
                  s=second('b',25)
                  s.show()                #parent class methods are modified according to user
                  s.work()