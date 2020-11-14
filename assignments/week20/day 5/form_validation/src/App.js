import "./App.css";
function Eventlistener() {
  var value = document.getElementById("email").value;
  var password_value = document.getElementById("password").value;
  regExp(value);
}
function regExp(value, password_value) {
  var exprx = /@/;
  var paswd = /^([a-z0-9]+)$/;
  var para = document.getElementById("email_text");
  var password_para = document.getElementById("email_password");
  var count = 0;
  if (exprx.test(value)) {
    para.innerHTML = "EMAIL DOES MEET REQUIREMENT";
    count += 1;
  } else {
    para.innerHTML = "EMAIL DOESNOT MEET REQUIREMENT";
  }
  if (paswd.test(password_value)) {
    password_para.innerHTML = "PASSWORD DOES MEET REQUIREMENT";
    count += 1;
  } else {
    password_para.innerHTML = "PASSWORD DOESNOT MEET REQUIREMENT";
  }
  if (count === 2) {
    document.getElementById("valid_data").innerHTML =
      "EMAIL HAS BEEN VALIDATED SUCCESSFULLY";
  }
}
function App() {
  return (
    <div>
      <div className="form_details">
        <input type="email" placeholder="Email address here" id="email" />
        <p id="email_text">
          SHOULD CONTAIN CAPS APLPHABAT AND @ EX:abc@simple.com
        </p>
        <input type="password" placeholder="password here" id="password" />
        <p id="email_password">
          SHOULD CONTAIN CAPS APLPHABAt A NUMBER EX:Abcxmclmz545
        </p>
        <button onClick={Eventlistener}>submit</button>
        <p id="valid_data"></p>
      </div>
    </div>
  );
}

export default App;
