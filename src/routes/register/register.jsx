import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { LiaEyeSlash, LiaEye } from "react-icons/lia";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      console.log("Registration success:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="regi_holder">
      <div>
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        
      </div>
      <div className="register">
        <div className="formContainer">
          <h1>Register on CheckBest Nigeria for Exclusive Benefits</h1>
          <p className="no_account">
            Already have an account? <a href="/login">Signin</a>
          </p>
          <div className="sociallog">
            <button>
              {" "}
              <FcGoogle /> Sign up with Google
            </button>
            <button className="btn_two">
              {" "}
              <MdOutlineFacebook /> Facebook
            </button>
          </div>

          <div class="divider">
            <span class="line"></span>
            <p>or sign up with your email</p>
            <span class="line"></span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="username">
              <input
                className="form-control"
                name="username"
                required
                type="text"
                placeholder="Username"
              />
              {/* <input
                className="form-control"
                name="username"
                required
                type="text"
                placeholder="Last name"
              /> */}
            </div>
            <div>
              <input
                className="form-control"
                name="email"
                required
                type="text"
                placeholder="Email address"
              />
            </div>
            <div className="number">
              <div className="country-select-wrapper">
                <label htmlFor="countryCode" className="form-label">
                  Country Code
                </label>
                <select className="form-select country-select" id="countryCode">
                  <option value="+1">🇺🇸 USA (+1)</option>
                  <option value="+44">🇬🇧 UK (+44)</option>
                  <option value="+91">🇮🇳 India (+91)</option>
                  <option value="+234">🇳🇬 Nigeria (+234)</option>
                  {/* Add more country codes if needed */}
                </select>
              </div>

              <div className="phone-input-wrapper">
                <label htmlFor="phoneNumber" className="form-label">
                  Format (digits only)
                </label>
                <input
                  id="phoneNumber"
                  className="form-control"
                  name="username"
                  required
                  minLength={3}
                  maxLength={20}
                  type="text"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <label htmlFor="phoneNumber" className="form-label">
                Create Password
              </label>
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
                  top: "65%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "1.3rem",
                  color: "#555",
                }}
              >
                {showPassword ? <LiaEyeSlash /> : <LiaEye />}
              </span>
            </div>
            {/* <div>
            <a href="" className="forgotpass">
              Forgot Password
            </a>
          </div> */}
            {/* <div className="check">
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
          </div> */}

            <button disabled={isLoading}>Register</button>
            {/* {error && <span className="error">{error}</span>} */}
            {/* <Link to="/register">{"Don't"} you have an account?</Link> */}
          </form>
        </div>
        {/* <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div> */}
      </div>
    </div>

    {/* <div className="dummyhomepageshops">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis, 
      doloribus non quam officia laudantium! 
      Tenetur distinctio pariatur porro tempora?
    </div> */}
    </>
  );
}

export default Register;
