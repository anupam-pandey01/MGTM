import { useEffect, useState } from "react";
import "./Dashboard.css";
import { handleError } from "../../../utils/handler";
import { getDashboard } from "../../../services/adminServices/adminApi";
import { useAuth } from "../../context/AdminAuthContext";
import { ReceiptTurkishLiraIcon } from "lucide-react";
import Stats from "../../component/Common/StatsCard/Stats";

const Dashboard = () => {
  const { loading } = useAuth();
  const [dashboard, setDashboard] = useState({});

  useEffect(() => {
    async function dashboard() {
      try {
        const data = await getDashboard();
        setDashboard(data.dashboard);
      } catch (err) {
        handleError(err);
      }
    }
    dashboard();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>

        <p>Welcome back, Admin</p>
      </div>

      <Stats
        cards={[
          {
            title: "Total Student",
            value: dashboard.totalStudent || 0,
          },
          {
            title: "Total Service",
            value: dashboard.totalService || 0,
          },
          {
            title: "Total Blogs",
            value: dashboard.totalBlogs || 0,
          },
          {
            title: "Total Earning",
            value: `${dashboard.totalAmount || 0} ₹`,
          },
        ]}
      />

      <div className="dashboard-recent">
        <h1>Recent Activity</h1>
        <div className="activity">
          <div className="activity-card">
            <div className="activity-left">
              <div className="activity-dot"></div>

              <div className="activity-content">
                <h4>New student enrolled</h4>

                <p>Rahul Sharma applied for Study Abroad.</p>
              </div>
            </div>

            <span className="activity-time">2 min ago</span>
          </div>

          <div className="activity-card">
            <div className="activity-left">
              <div className="activity-dot"></div>

              <div className="activity-content">
                <h4>New student enrolled</h4>

                <p>Rahul Sharma applied for Study Abroad.</p>
              </div>
            </div>

            <span className="activity-time">2 min ago</span>
          </div>

          <div className="activity-card">
            <div className="activity-left">
              <div className="activity-dot"></div>

              <div className="activity-content">
                <h4>New student enrolled</h4>

                <p>Rahul Sharma applied for Study Abroad.</p>
              </div>
            </div>

            <span className="activity-time">2 min ago</span>
          </div>

          <div className="activity-card">
            <div className="activity-left">
              <div className="activity-dot"></div>

              <div className="activity-content">
                <h4>New student enrolled</h4>

                <p>Rahul Sharma applied for Study Abroad.</p>
              </div>
            </div>

            <span className="activity-time">2 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
