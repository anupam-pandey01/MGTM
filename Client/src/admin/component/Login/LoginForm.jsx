import { useState } from "react";
import { handleError } from "../../../utils/handler";
import { login } from "../../../services/adminServices/adminApi";
import { useAuth } from "../../context/AdminAuthContext";
import { getAccessToken, setAccessToken } from "../../../utils/tokenService";
import { useNavigate } from "react-router"

const LoginForm = ({ setActiveTab, formData, setFormData, handleSubmit, errors }) => {

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const navigate = useNavigate()

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="view">
      <div className="form-header">
        <span className="label-tag">
          Admin access
        </span>

        <h2>
          Welcome back.
        </h2>

        <p>
          Sign in to access the MGTM admin dashboard.
        </p>

      </div>

      {/* {success && (
        <div className="success-banner">
          Login successful — redirecting...
        </div>
      )} */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">

          <label>Email address</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter the admin email"
          />

          {/* {errors.email && (
            <span className="error-msg">
              {errors.email}
            </span>
          )} */}

        </div>

        {/* PASSWORD */}

        <div className="form-group">

          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          {errors.password && (
            <span className="error-msg">
              {errors.password}
            </span>
          )}

        </div>

        <button
          type="submit"
          className="btn-submit"
        >
          Sign in
        </button>

      </form>

      <div className="form-footer">

        Trouble signing in?

        <button
          className="link-btn"
          onClick={() => setActiveTab("forgot")}
        >
          Reset your password →
        </button>

      </div>

    </div>
  );
};

export default LoginForm;