$(document).ready(function(){
    var cities = "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";
   


    $('#search-query').keyup(function()
    {
      var search = $('#search-query').val();
      var expression = new RegExp(search,"i");
     

      $.ajax({
          url: cities,
          success:function(data)
          {
            data = JSON.parse(data)
            if(data.length>0)
            {
              $.each(data , function(err,val)
              {
                if(val.state.search(expression)===0)
                {
                  $('#search-results').append('<li class="list-group-item link-class">'+val.name+'</li>');
                  if ($('#search-results').val ()== ""){
                    $('#search-result').html('')
                  }
                }
              })

            }
            
          }
        // ajax
      })
      
      // keyup func 
    
    })


})