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
def pathsum(root,sum,path,res):
    if root is None:
        return
    if sum-root.val == 0 and root.left is None and root.right is None:
        res.append(path+[root.val])
        return
    pathsum(root.left,sum-root.val,path+[root.val],res)
    pathsum(root.right,sum-root.val,path+[root.val],res)


if __name__ == "__main__":
    r=node(5)
    insertion(r,node(4))
    insertion(r,node(8))
    insertion(r,node(11))
    insertion(r,node(13))
    insertion(r,node(8))
    insertion(r,node(4))
    insertion(r,node(7))
    insertion(r,node(2))
    insertion(r,node(1))
    path=[]
    result=[]
    pathsum(r,22,path,result)
    print(result)
    
