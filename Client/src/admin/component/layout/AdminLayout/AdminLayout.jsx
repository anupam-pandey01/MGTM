import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import AdminSidebar from "../../AdminSidebar/AdminSidebar";

import "./AdminLayout.css";

const AdminLayout = () => {

  return (
    <>
    <Helmet>
      <title>Admin Panel | MGTM </title>
    </Helmet>
    <div className="admin-layout">
      <AdminNavbar />
      <div className="admin-main">
        <AdminSidebar />
        <div className="admin-content">
          <Outlet />
        </div>
       
      </div>

      <AdminFooter />
    </div>
    </>
  );
};

export default AdminLayout;