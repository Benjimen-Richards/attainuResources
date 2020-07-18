Q1. What is the time complexity of the following code :
a = 0, i = N #can be written as 
while i > 0: #for(i=N;i>0;i/2)
a += i       #stmt
i /= 2       #
->answer:o(n)
->explanation:so the above code can be written in c language as for
            loopp in which the i is iterated in i/2 times so the statement 
            excetues in "o(logn)"
Q2 What is the time complexity of the following code
i = n / 2       #can be written as 
 while i < n:    #for(i=n/2;i<n;i++)    exceutes for n times
 j = 2           #for(j=2;i<n;j*2)      executes for logn times becoz of j*2 increment
 while j < n:    #    stmt
 j *= 2
 answer:o(nlogn)
 explanation:the first for loop is excetuted for n times becoz of i++ increment
            and ends when the loop becomes >n so it excetues for n times
            and for secind statemt the excetion is for logn times becoz of 
            j*2 increment
Q3.
 count = 0;
 i = N         #can be written as 
 while i > 0:  #for (i=N;i>0;i/2)    excetues for n times 
 While j < i:  #count=count+1   considered as statment
 count+=1
 i /= 2
answer:o(N)
explanation:it excetues for n times becoz the condition is greater than 0 
            and increament is always increasing which results greater than 
            0 always.so the excetution is always n times 