function solve(nums){
    if (!nums) return 
    var res=[]
    length = nums.length
    for(let x = 0 ; x < length ; x++){
        res.push(1)
    }
    for (let i=length ; i > 0 ; i-- )
    {
        for (let j = i+1 ; j < length ; j++)
        {
            if(nums[i] < nums[j])
            {
                res[i] = Math.max(res[i] , res[j]+1)
            }
        }
    }
    console.log(Math.max.apply(null,res))

}
var a=[100,4,200,1,3,2]
solve(a)


