#Write a program that takes input from the user as marks in 5 subjects and assigns a grade according to the following rules


print("student subject wise marks")

s1=int(input("emter maths subject marks of a student\n"))
s2=int(input("enter telugu subjects marks of a student\n"))
s3=int(input("enter english subject marks of the student\n"))
s4=int(input("enter social subject marks of the student\n"))
s5=int(input("enter chemistry marks of the student\n"))

if(s1 or s2 or s3 or s4 or s5) >100
    print("enter valid marks")
    break

#percentage of the student marks of all the subject

p=(s1+s2+s3+s4+s5)/5

if(p>=90):
    print("student grade w.r.t marks of the subject is A")
elif((p>=70) and (p<=90)):
    print("student grade w..r.t marks of the subject is B")
elif((p>=50)and (p<=70)):
    print("student grade w.r.t. marks of the subject is C")
elif((p>=30) and (p<=50)):
    print("student grade w,r.t. marks of the subjects is D")
elif(p<=30):
    print("student grade w.r.t. marks of the subjects is E")
