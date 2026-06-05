import { useState } from "react";

const ForgotPasswordForm = ({ setActiveTab }) => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      setError("Invalid email address");
      return;
    }

    setError("");

    console.log(email);

    setSuccess(true);
  };

  return (
    <div className="view">

      <div className="form-header">

        <span className="label-tag">
          Account recovery
        </span>

        <h2>
          Reset password.
        </h2>

        <p>
          Enter your admin email and we'll send a reset link.
        </p>

      </div>

      {success && (
        <div className="success-banner">
          Reset link sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Email address</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@mgtmconsultancy.com"
          />

          {error && (
            <span className="error-msg">
              {error}
            </span>
          )}

        </div>

        <button
          type="submit"
          className="btn-submit"
        >
          Send reset link
        </button>

      </form>

      <div className="form-footer">

        <button
          className="link-btn"
          onClick={() => setActiveTab("login")}
        >
          ← Back to sign in
        </button>

      </div>

    </div>
  );
};

export default ForgotPasswordForm;