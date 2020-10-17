document.getElementById('myBtn').addEventListener("click",function(){
    var x=document.querySelectorAll('.squares')
    for ( let i=1;i<=x.length;i++)
    {
        x[i].innerHTML=x[i].innerHTML*x[i].innerHTML
        
        
    }
    
})
