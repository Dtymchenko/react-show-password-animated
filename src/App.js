import "./App.css";
import React from "react";

function App() {
  const passwordInputRef = React.useRef(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const TIME_OUT = 5000;
  const handleShow = (e) => {
    e.preventDefault();
    if (passwordInputRef.current.value.trim()) {
      setShowPassword(true);
      clearTimeout(timer);
      timer();
    }
  };

  function timer() {
    setTimeout(() => {
      if (!!showPassword) return;
      setShowPassword(false);
    }, TIME_OUT);
  }

  return (
    <div className="wrapper">
      <div className="text">
        Function of animated show password was done here. Even crazy clicking
        show button does not lead to bug with time outs
      </div>
      <div className="form_wrapper">
        <form className="form">
          <div className="form_element">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              id="login"
              placeholder="Enter your login"
            ></input>
          </div>
          <div className="form_element">
            <label htmlFor="password">Password</label>
            <div className="password_input_block">
              <input
                ref={passwordInputRef}
                type={!showPassword ? "password" : "text"}
                id="password"
                className={!!showPassword ? "animate_password" : ""}
                placeholder="Enter your password"
              ></input>
              <button onClick={handleShow}>Show</button>
            </div>
          </div>

          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
