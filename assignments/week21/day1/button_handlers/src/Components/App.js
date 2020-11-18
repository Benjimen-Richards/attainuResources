import "./App.css";
function App() {
  const changeHandler = (e) => {
    // e.preventDefault();
    console.log("ONCHANGE event provoked", e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert("form submitted successfully");
  };
  const clickHandler = () => {
    console.log("clickHandler");
  };

  return (
    <div className="form_validation">
      <h1>Form validation</h1>
      <hr />
      <input
        type="email"
        placeholder="Email address here"
        onChange={changeHandler}
      ></input>
      <input type="password" placeholder="Password here" />
      <input type="radio" id="checked" />
      <label>Check this to agree terms and conditions</label>
      <button type="submit" onClick={submitHandler}>
        onSubmit
      </button>
      <button type="submit" onClick={clickHandler}>
        ONCLICK
      </button>
    </div>
  );
}

export default App;
