class a:
     def __init__(self, val, next=None):
         self.val = val
         self.next = next
class b:
    def add_at_tail(self,head,x):
        cur=head
        if cur is None:
            return a(x)
        while cur.next!=None:
            cur=cur.next
        cur.next=a(x)
        return head
    def print(self,head):
        cur=head
        while cur!=None:
            print(cur.val)
            cur=cur.next
    def insertion(self,head,after_number,number):
        cur=head
        while cur.val!=after_number:
            cur=cur.next
        new=a(number)
        new.next=cur.next
        cur.next=new
        return head
    def deletion(self,head,number_delete):
        cur=head
        while cur.val is not number_delete:
            cur = cur.next
        cur.val = cur.next.val
        cur.next = cur.next.next
        return head

if __name__ == "__main__":
    x=None
    y=b()
    x=y.add_at_tail(x,1)
    x=y.add_at_tail(x,2)
    x=y.add_at_tail(x,3)
    x=y.add_at_tail(x,5)
    y.print(x)
    print('completed adding\n')
    x=y.insertion(x,3,4)
    y.print(x)
    print('completed inserting')
    x=y.deletion(x,4)
    y.print(x)
    print('completed deletion')

    


    
    