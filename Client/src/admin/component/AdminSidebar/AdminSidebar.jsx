import "./AdminSidebar.css";

import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  Newspaper,
  Handshake,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router";
import { useAuth } from "../../context/AdminAuthContext";

const AdminSidebar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "Purchase",
      path: "/admin/purchase",
      icon: <Users size={20} />,
    },

    {
      name: "Add Stats",
      path: "/admin/stats",
      icon: <BriefcaseBusiness size={20} />,
    },

    {
      name: "Blogs",
      path: "/admin/blogs",
      icon: <Newspaper size={20} />,
    },
  ];

  const { logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >

            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </NavLink>

        ))}

      </div>

      {/* BOTTOM */}

      <div className="sidebar-bottom">
        <button className="sidebar-logout" onClick={()=> logout()}>

          <LogOut size={20} />

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
};

export default AdminSidebar;