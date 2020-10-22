$(document).ready(function(){
    // $('li').on(
    //     {
    //        click: function() {
    //            $(this).addClass('green')
    //        },
    //        mouseleave:function(){
    //            $(this).addClass('greenout')
    //        }
    //     }
    //    )
    $("li").on(
        {
            click: function() {
                $(this).addClass('green')
        },
        mouseleave:function(){
                $(this).addClass('greenout')
      }
    });
      
})