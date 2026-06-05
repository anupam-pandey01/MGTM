import { Outlet } from "react-router";

import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import AdminSidebar from "../../AdminSidebar/AdminSidebar";

import "./AdminLayout.css";

const AdminLayout = () => {

  return (
    <div className="admin-layout">
      <AdminNavbar />
      {/* SIDEBAR */}



      {/* RIGHT SIDE */}

      <div className="admin-main">
        <AdminSidebar />
        <div className="admin-content">
          <Outlet />
        </div>
       
      </div>

      <AdminFooter />
    </div>
  );
};

export default AdminLayout;