function postmodel()
{
    $(document).ready(function()
    {
        var todo = 'https://jsonplaceholder.typicode.com/todos'
        $.ajax
        ({
            url : todo,
            type : 'get',
            success : function(data)
            {
                for ( i = 0 ; i < data.length ; i++)
                {
                    $('div ul').append('ID','<li style="text-decoration: none;font-weight: bolder;" >'+data[i].id+'</li>','Title','<li style="text-decoration: none;font-weight: bolder;" >'+data[i].title+'</li>','<hr>')
                }
            }
        })
    })
}