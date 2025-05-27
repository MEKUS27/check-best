// import axios from "axios";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { LiaEyeSlash, LiaEye } from "react-icons/lia";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);

      navigate("/");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Login failed! invalid Credentials!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="log_holder">
      <div>
        {error && (
          <div class="alert alert-danger alter_err" role="alert">
            {error}
          </div>
        )}
        
      </div>
       <div className="login">
      <div className="formContainer">
        <h1>Log in to Your Account</h1>
        <p className="no_account">
          No account? <a href="/register">Register</a>
        </p>
        <div className="sociallog">
          <button>
            {" "}
            <FcGoogle /> Sign in with Google
          </button>
          <button className="btn_two">
            {" "}
            <MdOutlineFacebook /> Facebook
          </button>
        </div>

        <div class="divider">
          <span class="line"></span>
          <p>or continue with your email</p>
          <span class="line"></span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <div style={{ position: "relative" }}>
            <input
              className="form-control"
              name="password"
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              style={{ paddingRight: "40px" }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "1.3rem",
                color: "#555",
              }}
            >
              {showPassword ? <LiaEyeSlash /> : <LiaEye />}
            </span>
          </div>
          <div>
            <a href="" className="forgotpass">
              Forgot Password
            </a>
          </div>
          <div className="check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkDefault"
              />
              <div>
                <label className="form-check-label" htmlFor="checkDefault">
                  Keep me signed in for 7 days
                  <span>If you're using a public device, please skip.</span>
                </label>
              </div>
            </div>
          </div>

          <button disabled={isLoading}>Login</button>
          {/* {error && <span className="error">{error}</span>} */}
          {/* <Link to="/register">{"Don't"} you have an account?</Link> */}
        </form>
      </div>
      {/* <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div> */}
    </div>
    </div>  
   
  );
}

export default Login;
