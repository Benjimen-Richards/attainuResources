class a:
     def __init__(self, val, next=None):
         self.val = val
         self.next = next
class b:
    def add(self,head,x):
        cur=head
        if cur is None:
            return a(x)
        while cur.next!=None:
            cur=cur.next
        cur.next=a(x)
        return head
    def print(self,head):
        cur=head
        a=[]
        while cur!=None:
            a.append(cur.val)
            cur=cur.next
        mid=len(a)//2
        return a[mid]

if __name__ == "__main__":
    n=list(map(int,input("Enter a list \n").strip('][').split(',')))
    x=a(n[0])
    y=b()
    for i in range(1,len(n)):
        x=y.add(x,n[i])
    print('mid of given list is :',y.print(x))

    
    