#preorder ,postorder and inorder
class node:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def preorder(root,res):
    if root is None:
        return
    res.append(root.val)
    preorder(root.left,res)
    preorder(root.right,res)

def inorder(root,res):
    if root is None:
        return
    inorder(root.left,res)
    res.append(root.val)
    inorder(root.right,res)

def postorder(root,res):
    if root is None:
        return

    postorder(root.left,res)
    
    postorder(root.right,res)
    res.append(root.val)

def solve1(root):
    res=[]
    preorder(root,res)
    return res

def solve2(root):
    res=[]
    inorder(root,res)
    return res

def solve3(root):
    res=[]
    postorder(root,res)
    return res

if __name__ == "__main__":
    root=node(2)
    root.left=node(7)
    root.left.left=node(2)
    root.left.right=node(6)
    root.left.right.left=node(5)
    root.left.right.right=node(11)
    root.right=node(5)
    root.right.right=node(9)
    root.right.right.left=node(4)
    root.right=node(5)
    print('preorder',solve1(root))
    print('inorder',solve2(root))
    print('postorder',solve1(root))
    
    
