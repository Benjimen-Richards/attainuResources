$(document).ready(function(){
    var cities = "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";
  
    $('#search-query').keyup(function () {
        var searchQuery = $('#search-query').val();
        var expression = new RegExp(searchQuery,"i");
        $('#search-results').html('')
  
        $.ajax({url:cities,
                success:function(data){
                    data = JSON.parse(data);
  
  
                    if(data.length > 0) {
                        $.each(data,function(err,value) {
                            if (value.state.search(expression) === 0){
                                $('#search-results').append('<li class="list-group-item link-class">'+value.name+'</li>');
                            }
                        })
  
                    }
                }})
    })