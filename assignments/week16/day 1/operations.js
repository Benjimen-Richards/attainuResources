// Make a JavaScript function and use it as a class and perform the below action:
// 1. It must have a sum function for adding.
// 2. It must have a function for getting squares.
// 3. Function must have the capability to do the chained actions.
// Ex.
// const operation = new Operations();
// console.log(operation.sum(1,2))
// output: 3
// console.log(operation.square(2))
// output: 4
// console.log(operation.sum(2,3).square())
// output: 25

class operator{
    constructor ()
    {
        //pass
    }
    sum(a,b){
       var s = (a+b)
       function square_of_number()
       {
            return (s**s)
       }
       return s
    }
    square(a)
    {
        return (a**a)
    }
}

const operation=new operator()
console.log(operation.sum(1,2))
console.log(operation.square(3))
console.log(operation.sum(2,3).square_of_number())

