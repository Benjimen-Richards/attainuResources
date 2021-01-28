
class Tree:
    # Initialising data
    def __init__(self, val):
        self.head = val
        self.left = None
        self.right = None


def printLevelOrder(root):
    h = height(root)
    for i in range(1, h+1):
        printGivenLevel(root, i)


def printGivenLevel(root, level):
    if root is None:
        return 0
    if level == 1:
        print(root.head)
    elif level > 1:
        printGivenLevel(root.left, level-1)
        printGivenLevel(root.right, level-1)

# getting height of tree


def height(Tree):
    if Tree is None:
        return 0
    else:
        lheight = height(Tree.left)
        rheight = height(Tree.right)
        if lheight > rheight:
            return lheight+1
        else:
            return rheight+1


# data pass to tree
root = Tree(1)
root.left = Tree(2)
root.right = Tree(3)
root.left.left = Tree(4)
root.left.right = Tree(5)
print('level order is ')
printLevelOrder(root)
