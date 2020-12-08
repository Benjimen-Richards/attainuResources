function myfunction() {
  var x = document.getElementById("myText").value;
  var para = document.getElementById("demo");
  para.innerText = "";
  if (!x) {
    para.innerText = "Data is empty";
  } else if (!/^[a-zA-Z]*$/g.test(x)) {
    para.innerText = "Data is not string";
  } else {
    var res = x.charAt(0).toUpperCase() + x.slice(1, x.length).toLowerCase();
    para.innerText = res;
  }
}
// function result() {

// }
