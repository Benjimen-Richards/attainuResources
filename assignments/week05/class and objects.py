#creating my education journey
class myname:#class 1
    def __init__(self,name,nationality):#constructor
        self.name=name
        self.nationality=nationality
    def course(self,course,duration):#methods
        self.course=course
        self.duration=duration
    def graduation(self,degree,area):
        self.area=area
        self.degree=degree
        
class batch: #declaing second class
    def __init__(self,name,size,students):#construtor for class 2
        self.name=name
        self.size=size
        self.students=students
    def print(self):#methods
        for i in self.students:
            print(i.name,'joined in',i.course,' for ',i.duration,'after completing',i.degree,'in',i.area)
    def add(self,student):#appending
        self.students.append(student)
if __name__ == "__main__":
    student1=myname('a','indian')                               #initialise object with class
    student2=myname('b','nri')                                  #assigning values to methods with help of objects
    student3=myname('c','australian')
    student1.graduation('btech','hyd')
    student2.graduation('degree','hyd')
    student3.graduation('polytech','amristar')
    student1.course('attainu','7months')
    student2.course('attainu','8months')
    student3.course('attainu','8months')
    aryabhatta=batch('aryabhata',150,[student1,student2])
    aryabhatta.print()
    print('///after appending the students///')
    aryabhatta.add(student3)    
    aryabhatta.print()
