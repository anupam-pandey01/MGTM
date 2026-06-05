import { useState } from "react";
import "./Login.css";
import LoginForm from "../../component/Login/LoginForm";
import ForgotPasswordForm from "../../component/Login/ForgetPasswordForm";
import AdminNavbar from "../../component/layout/AdminLayout/AdminNavbar";
import AdminFooter from "../../component/layout/AdminLayout/AdminFooter";
import { login } from "../../../services/adminServices/adminApi";
import { useNavigate } from "react-router";
import { getAccessToken } from "../../../utils/tokenService";
import { useAuth } from "../../context/AdminAuthContext";
import { handleError } from "../../../utils/handler";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
      email: "",
      password: ""
  })

  const navigate = useNavigate();
  const { setAdmin,  setIsLoggedIn } = useAuth();


  const validate = () => {

    let newErrors = {};

    // EMAIL

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    // PASSWORD

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try{
      const data = await login(formData)
      
      
      setAdmin(data.userId)
      setIsLoggedIn(true)
      setTimeout(() => {
        navigate("/admin/dashboard")
      }, 2000);
    }catch(err){
      handleError(err)
    }

    // setSuccess(true);
  };

  
  return (
    <div className="page">
      <div className="main">
        <div className="form-card">

          <div className="tabs">

            <button
              className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Sign in
            </button>

            <button
              className={`tab-btn ${activeTab === "forgot" ? "active" : ""}`}
              onClick={() => setActiveTab("forgot")}
            >
              Forgot password
            </button>

          </div>

          {/* SWITCH */}

          {activeTab === "login" ? (
            <LoginForm setActiveTab={setActiveTab} setFormData={setFormData} formData={formData} handleSubmit={handleSubmit} errors={errors}/>
          ) : (
            <ForgotPasswordForm setActiveTab={setActiveTab} />
          )}

        </div>

      </div>

    </div>
  );
};

export default Login;