import { useState } from "react";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(registerInfo);
  };

  return (
    <div className="App">
      <div className="register-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={registerInfo.email || ""}
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, email: e.target.value })
              }
            ></input>
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={registerInfo.username || ""}
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, username: e.target.value })
              }
            ></input>
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={registerInfo.password || ""}
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, password: e.target.value })
              }
            ></input>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    </div>
  );
}
export default Register;
