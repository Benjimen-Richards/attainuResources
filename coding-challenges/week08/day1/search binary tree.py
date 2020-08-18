class node:
    def __init__(self,val):
        self.val=val
        self.right=None
        self.left=None

    
def insertion(root,node):
    if root is None:
        root=node

    else:
        if root.val<node.val:
            if root.right is None:
                root.right=node

            else:
                insertion(root.right,node)

        else:
            if root.left is None:
                root.left=node

            else:
                insertion(root.left,node)

def search(root,key):
    if root is None:
        return None

    if root.val==key:
        print('key found:',root.val)
        

    if key>root.val:
        return search(root.right,key)
    if key<root.val:
        return search(root.left,key)

if __name__ == "__main__":
    r=node(30)
    insertion(r,node(15))
    insertion(r,node(60))
    insertion(r,node(7))
    insertion(r,node(22))
    insertion(r,node(45))
    insertion(r,node(75))
    insertion(r,node(17))
    insertion(r,node(27))
    search(r,27)

