import React, { useState } from 'react'
import AddReportForm from './AddReportForm';

const ReportTab = () => {
    const allReports = [
        { id: "#REP001", name: "John Smith", type: "Blood Test", date: "2024-01-20", status: "Completed" },
        { id: "#REP002", name: "Jane Doe", type: "X-Ray", date: "2024-01-19", status: "Pending" },
        { id: "#REP003", name: "Robert Johnson", type: "CBC", date: "2024-01-18", status: "Completed" },
        { id: "#REP004", name: "Sarah Wilson", type: "Urine Analysis", date: "2024-01-18", status: "Failed" },
        { id: "#REP005", name: "Emma Watson", type: "MRI", date: "2024-01-17", status: "Completed" },
        { id: "#REP006", name: "Chris Evans", type: "Blood Test", date: "2024-01-17", status: "Pending" },
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const recordsPerPage = 10;
      const totalPages = Math.ceil(allReports.length / recordsPerPage);
    
      const paginatedReports = allReports.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
      );
    
      const getStatusBadge = (status) => {
        if (status === "Completed") return <span className="badge bg-success-subtle text-success">{status}</span>;
        if (status === "Pending") return <span className="badge bg-warning-subtle text-warning">{status}</span>;
        if (status === "Failed") return <span className="badge bg-danger-subtle text-danger">{status}</span>;
      };
  return (
    <div>
      <div className="container py-4">
      <div className="card p-3">
        <div className="d-flex flex-wrap justify-content-between mb-3 gap-2">
          <div className="d-flex gap-2">
            <input type="text" className="form-control" placeholder="Search reports..." />
            <select className="form-select">
              <option>All Types</option>
              <option>Blood Test</option>
              <option>CBC</option>
              <option>X-Ray</option>
            </select>
            <select className="form-select">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 6 months</option>
            </select>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-dark">Export Reports</button>
            <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:"#f3ff47"}}>New Report</button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <AddReportForm/>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn " style={{backgroundColor:"#f3ff47"}}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Patient Name</th>
                <th>Test Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.type}</td>
                  <td>{report.date}</td>
                  <td>{getStatusBadge(report.status)}</td>
                  <td className="text-center"><span className="text-primary " style={{ cursor: "pointer" }}>   <i className="fa fa-eye text-primary"></i></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between mt-2">
          <p>
            Showing {(currentPage - 1) * recordsPerPage + 1} to{" "}
            {Math.min(currentPage * recordsPerPage, allReports.length)} of {allReports.length} results
          </p>

          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => (
                <li className={`page-item ${currentPage === num ? "active" : ""}`} key={num}>
                  <button className="page-link" onClick={() => setCurrentPage(num)}>{num}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal  */}

    </div>
    </div>
  )
}

export default ReportTab
