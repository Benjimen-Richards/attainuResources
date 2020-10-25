$.ajax({
    url:'https://api.github.com/users' ,
    type: 'get' ,
    success: function(data)
    {
        for(let i = 0;i < data.length ; i++)
        {
            var li = '<li><img src="'+data[i].avatar_url+'"/>LOGIN:'+data[i].login+',\nTYPE:'+data[i].type+'</li>'
            
            $('.a').append(li)
        }

    }
    
})