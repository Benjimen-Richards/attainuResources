var btn = document.getElementById('fetch')

var xhr = new XMLHttpRequest()
xhr.open('GET', 'index2.js', true)
xhr.onload = function () {
    if (this.status === 200) 
    {
        var response = JSON.parse(this.responseText)
        function forLoop(value) 
        {
            for (i in response) 
            {
                console.log( {
                    Post: i , id : value[i].id , title:value[i].title
                })
            }
        }
        forLoop(response)
    }
}
xhr.send()

