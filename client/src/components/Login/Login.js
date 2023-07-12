import { useState } from "react";
import { login } from "../../api/index.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(loginInfo);
      navigate(`../nozama`);
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
  };

  return (
    <div className="App">
      <div className="login-form">
        <h1>Login</h1>
        {loginError ? <p>Incorrect login information</p> : ""}
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
