// var form = document.getElementsByTagName("form");
// var label = document.getElementsByTagName("label");
// var input = document.getElementsByTagName("input");
// var label2 = document.getElementsByTagName("label2");
// var parent = document.getElementsByTagName("parent");
// var btn = document.getElementsByClassName("btn");
// form.append($(label).text("Product Code:"));
// form.append($(input).attr("name", "productCode").attr("type", "text"));
// form.append(
//   $(label2)
//     .attr("name", "hint")
//     .text("The product code can be found on the label.")
// );
// form.append("<br>");
// form.append($(input).attr("type", "submit"));
// parent.append(form);
document.getElementsByTagName("button").addEventListener("click", abc);
function abc() {
  console.log("hello");
}
