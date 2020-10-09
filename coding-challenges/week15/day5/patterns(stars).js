var number=4
var m,n
for(m=1;m<=number;m++){
  let arr=[]
  for(n=1;n<=m;n++){
    arr.push('*')
   }
  console.log(arr.join(' '))
}
for(m=number;m>=1;m--){
  let arr=[]
  for(n=m;n>=1;n--){
    arr.push('*')
   }
  console.log(arr.join(' '))
}

