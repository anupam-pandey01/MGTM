import { useState } from "react";
import { handleError, handleSuccess } from "../../../utils/handler";
import { resetPassword } from "../../../services/adminServices/adminApi";

const ForgotPasswordForm = ({ setActiveTab }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    try{
      setLoading(true);
      const data  = await resetPassword(email);

      if(data.success){
        handleSuccess(data.message);
      }else{
        handleError(data.message);
      }
    }catch(err){
      console.log(err);
      handleError(err);
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="view">
      <div className="form-header">
        <span className="label-tag">Account recovery</span>

        <h2>Reset password.</h2>

        <p>Enter your admin email and we'll send a reset link.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your admin email"
          />

          {error && <span className="error-msg">{error}</span>}
        </div>

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "...loading" : "Send reset password"}
        </button>
      </form>

      <div className="form-footer">
        <button className="link-btn" onClick={() => setActiveTab("login")}>
          ← Back to sign in
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
