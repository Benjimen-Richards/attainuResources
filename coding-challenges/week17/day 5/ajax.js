$.ajax({
    url: 'https://api.github.com/users',
    type: 'get',
    success: function(data){
      for(let i=1;i<data.length;i++)
      {
        var li = '<li>'+data[i].login+'</li>'
        $('#github').append(li)
      }
    }
})
