class Node
{
    constructor(val)
    {
        this.val=val
        this.right=null
        this.left=null
    }
}
class binary
{
    constructor()
    {
        this.root=null
    }
    insert(data)
    {
        let node = new Node(data)
        let cur= this.root
        if (cur == null)
        {
            cur = node
        }
        else{
            if (data < cur.val)
            {
                if (cur.right==null)
                {
                    cur.left = node
                }
                else
                {
                    this.insert (cur.right,node)
                }

            }
            else
            {
                if ( cur.left == null)
                {
                    cur.right = node
                }
                else
                {
                    this.insert(cur.left , node)
                }
            }
        }
    }
    getHeight()
    {
        left=this.getHeight(root.left)
        right=this.getHeight(root.right)
        return (left + right +1)
    }
    levelorder(root,i,temp)
    {
        if(root == null)
            return
        if (level==1)
        {
            temp.push(root.val)
            return
        }
        this.levelorder(root.left,i-1,temp)
        this.levelorder(root.right,i-1,temp)
    }
    printLevelorder()
    {
        h=this.getHeight()
        for(i=1;i<h+1;i++)
        {
            temp=[]
            this.levelorder(this.root,i)
        }
        console.log(temp)
    }
}
const BST=new binary(3)
BST.insert(4)
BST.insert(5)
BST.insert(2)
BST.insert(1)
BST.insert(9)
BST.printLevelorder()