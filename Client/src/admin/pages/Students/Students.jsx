import "./Students.css";

import {
  Trash,
  Search,
  Plus,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock3,
  GraduationCap,
  Download,
} from "lucide-react";
import PurchaseRow from "../../component/Purchase/PurchaseRow/PurchaseRow";
import { useEffect, useState } from "react";
import {
  exportPurchases,
  purchase,
} from "../../../services/adminServices/adminApi";
import StudentModal from "../../component/Purchase/StudentModal/StudentModal";
import DataTable from "../../component/Common/DataTable/DataTable";
import Pagination from "../../component/Common/Pagination/Pagination";

const Students = () => {
  const [purchases, setPurchases] = useState([]);
  const [totalStudent, setTotalStudent] = useState(1);
  const [totalPurchase, setTotalPurchase] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [service, setService] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);

  const handleExport = async () => {
    try {
      const file = await exportPurchases();

      const url = window.URL.createObjectURL(new Blob([file]));

      const link = document.createElement("a");
      link.href = url;
      link.download = "purchases.xlsx";

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const data = await purchase(
          page,
          debouncedSearch,
          paymentStatus,
          service,
        );

        setPurchases(data.purchase);
        setTotalPage(data.totalPages);
        setTotalStudent(data.totalStudent);
        setTotalPurchase(data.totalPurchase);
      } catch (error) {
        console.error(error);
      }
    };

    getStudent();
  }, [page, debouncedSearch, paymentStatus, service]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, paymentStatus, service]);

  return (
    <div className="students-page">
      <StudentModal user={selectedUser} onClose={() => setSelectedUser(null)} />

      <div className="students-header">
        <div>
          <h1>Students</h1>
          <p>Total Students: {totalStudent}</p>
        </div>

        <div>
          <button className="add-student-btn" onClick={handleExport}>
            <Download size={18} />
            Export Purchase
          </button>
        </div>
      </div>

      <div className="students-filters">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search by name, ID or email..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">All Services</option>
          <option value="Career Coaching (for Class 10, 11 & 12)">
            Career Coaching (for Class 10, 11 & 12)
          </option>
          <option value="Stream Selection (for Class 8 & 9)">
            Stream Selection (for Class 8 & 9)
          </option>
        </select>

        <select
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="free">Free</option>
        </select>
      </div>

      {/* TABLE */}

      <div className="students-table-wrapper">
        <DataTable
          columns={[
            "Name",
            "Student ID",
            "Service",
            "Product",
            "Status",
            "Amount",
            "Actions",
          ]}
          data={purchases}
          renderRow={(purchase, index) => (
            <PurchaseRow
              key={purchase._id || index}
              purchase={purchase}
              setSelectedUser={setSelectedUser}
            />
          )}
        />

        <div className="table-footer">
          {/* <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPage }, (_, idx) => (
              <button
                key={idx + 1}
                className={page === idx + 1 ? "active" : ""}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}

            <button
              disabled={page === totalPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <ChevronRight size={16} />
            </button>
          </div> */}
          <Pagination page={page} totalPage={totalPage} setPage={setPage}/>
        </div>
      </div>
    </div>
  );
};

export default Students;
