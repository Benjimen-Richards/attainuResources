class stack{
    constructor(){
        this.stack=[]
    }
    push__element(element){
        this.stack.push(element)
    }
    pop_element(){
        return 'popped element in the stack is:'+this.stack.pop()
    }
    peek_element(){
        console.log('last element in the stack is:',this.stack[this.stack.length-1])
    }
    display_stack(){
        let str=''
        for(let i=0;i<this.stack.length;i++)
        {
            str+=this.stack[i]+' '
        }
        console.log('updated stack is:',str)
    }
}

var s=new stack()
s.push__element(4)
s.push__element(5)
s.push__element(6)
s.push__element(7)
s.push__element(2)
s.push__element(1)
s.display_stack()
s.peek_element()
console.log(s.pop_element())
s.display_stack()