import { useState } from "react";
import { login } from "../../api/index.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(loginInfo);
  };
  return (
    <div className="App">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={loginInfo.username || ""}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            ></input>
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={loginInfo.password || ""}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
            ></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
