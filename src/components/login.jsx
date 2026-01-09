import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // 🔑 useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault(); // form submit ko prevent kare
    navigate("/"); // 🔴 Home page pe redirect
  };

  return (
    <div className="netflix-bg min-vh-100 d-flex flex-column align-items-center justify-content-start pt-5">
      {/* Netflix Logo Top */}
      <img
        src="netflix_logo.png"
        alt="Netflix Logo"
        className="netflix-logo mb-4"
      />

      {/* Login Card */}
      <div className="login-card p-4 p-md-5 text-white w-100" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email or phone number"
              className="form-control netflix-input"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control netflix-input"
            />
          </div>
          <button type="submit" className="btn btn-danger w-100 mb-3">
            Login
          </button>

          <div className="d-flex justify-content-between text-small mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe"/>
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="text-small text-link text-decoration-none">
              Need help?
            </a>
          </div>
        </form>

        <p className="text-small text-center">
          New to Netflix?{" "}
          <Link to="/signup" className="text-link text-decoration-none">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
