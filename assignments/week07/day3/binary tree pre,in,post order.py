#preorder ,postorder and inorder
class node:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def preorder(root):
    if root is None:
        return
    print(root.val)
    preorder(root.left)
    preorder(root.right)

def inorder(root):
    if root is None:
        return
    inorder(root.left)
    print(root.val)
    inorder(root.right)

def postorder(root):
    if root is None:
        return

    postorder(root.left)
    print(root.val)
    postorder(root.right)

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
    print('preorder')
    preorder(root)
    print('inorder')
    inorder(root)
    print('postorder')
    postorder(root)
