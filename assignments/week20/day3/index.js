var url = 'http://jsonplaceholder.typicode.com/comments';


var xhr = new XMLHttpRequest()
xhr.open('get', url, true)
xhr.onload = function () {
    var response = JSON.parse(this.responseText)
    const array = []
    var count = []
    for (i = 0; i < response.length; i++) {
        var string = response[i].body.substring(0, 50)
        var data = { "post": response[i].postId, "body": string }
        array.push(data)
        count.push(response[i].postId)
    }


    console.log('total postid"s in the data are :', Math.max(...count))
    console.log("data fetched with respect to post id and the body :", array)
}
xhr.send()

