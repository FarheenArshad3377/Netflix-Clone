import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="netflix-bg min-vh-100 d-flex flex-column align-items-center justify-content-start pt-5">
       <img
        src="netflix_logo.png"
        alt="Netflix Logo"
        className="netflix-logo mb-4"
      />

      <div className="login-card p-4 p-md-5 text-white">
        <h2 className="mb-4 text-center">Sign Up</h2>

        <form>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="form-control netflix-input"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
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
            Sign Up
          </button>
        </form>

        <p className="text-small text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-link text-decoration-none">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
