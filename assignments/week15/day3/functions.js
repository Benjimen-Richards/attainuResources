var array=[1,3,3,2]
var number=2
function x(array,number)
{
  if(array==null)
  {
    return -1
  }
  for(i=0;i<array.length;i++)
  {
    if(array[i]==number)
    {
      return ('Index of the element in array is'+' '+ i)
    }
  }
  return -1

}
function printj(name)
{
    console.log(name)
}

printj(x(array,number))