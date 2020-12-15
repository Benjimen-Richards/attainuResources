function Handler() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.response);
      console.log(data[0]);
      var p = document.getElementById("demo");
      if (data) {
        p.innerHTML =
          "<ul>" +
          data
            .map(function (item) {
              return (
                "<li>" + `Postid:${item.id} Title:${item.name}  ` + "</li>"
              );
            })
            .join("") +
          "</ul>";
      }
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}
