// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
//  3
//  / \
//  9 20
//  / \
//  15 7


class Treenode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


class bst {
    constructor() {
        this.root = null
    }
    insert(data)
    {
        let node = new Treenode(data)
        if ( !this.root)
            this.root = node
        else{
            this.insert_element(this.root , node)
        }
    }
    insert_element(root , node)
    {
        if ( node.val < root.val)
        {
            if ( root.left === null)
                root.left = node
            else
                this.insert_element(root.left , node)
        }
        else
        {
            if ( root.right === null)
                root.right = node
            else
                this.insert_element(root.right , node)
        }
    }
    getRootNode()
    {
        return this.root
    }
    preorder(root)
    {
        if ( root)
        {
            console.log(root.val)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
}


var BST = new bst()

BST.insert(9)
BST.insert(20)
BST.insert(15)
BST.insert(7)
BST.insert(3)
var root = BST.getRootNode()
BST.preorder(root)
// console.log(root)