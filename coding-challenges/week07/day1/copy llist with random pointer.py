class node:
    def __init__(self,val):
        self.val=val
        self.Next=None
def cloning(head):
    mapping=dict()
    cur=head
    cloned_list=None
    prev=None
    while cur!=None:
        n=node(cur.val)
        mapping[cur]=n
        if cloned_list is None:
            cloned_list=n
            prev=cloned_list
            mapping[cur]=cloned_list
        else:
            prev.Next=n
            prev=prev.Next
        cur=cur.Next

    #cur=head
    #while cur:
        #x=mapping[cur]                                            [I HAVE TIRED THIS PART IN LEETCODE IN]
        #if cur is not None:                                       [WHICH IT GOT EXECUTED.BUT THE PROBLEM]     
            #y=mapping[cur.random]                                 [IS WITH THE INPUT.I DIDT UNDERSTAND THE WAY]
            #x.random=y                                            [IT SHOULD BE UTILISED IN THIS PROGRAM ]
        #cur=cur.Next                                              [OTHER THAN THAN THE CONCEPT IS CLEAR]  
  
    return cloned_list
    

def display(head):
    while head:
        print(head.val)
        head=head.Next
if __name__ == "__main__":
    head=node(1)
    head.Next=node(2)
    head.Next.Next=node(3)
    new=cloning(head)
    display(new)
