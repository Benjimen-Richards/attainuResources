
function prompt_function()
 {
     var list = []
    var letter_size = prompt('enter a number')
    for(i = 0 ; i< letter_size;i++)
    {
        char = prompt('Enter a letter')
        if (char === '#')
        {
            list.pop()
        }
        else
        {
            list.push(char)
        }
    }
    var para = document.getElementById('demo')
    para.innerText = list
}
// "abc#d##c