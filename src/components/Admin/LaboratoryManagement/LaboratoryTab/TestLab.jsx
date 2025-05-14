import React, { useState } from 'react'
import TestLabForm from './TestLabForm';

const TestLab = () => {
    const allTests = [
        { id: "TEST-2024-001", patient: "John Smith", test: "Blood Test", date: "Jan 15, 2024", status: "Pending" },
        { id: "TEST-2024-002", patient: "Jane Doe", test: "CBC", date: "Jan 14, 2024", status: "Completed" },
        { id: "TEST-2024-003", patient: "Robert Johnson", test: "Urine Analysis", date: "Jan 14, 2024", status: "Completed" },
      ];
    
      const [activeTab, setActiveTab] = useState("All");
    
      const filteredTests =
        activeTab === "All"
          ? allTests
          : allTests.filter((item) => item.status === activeTab);
    
      const getStatusBadge = (status) => {
        if (status === "Completed") return <span className="badge bg-success-subtle text-success">{status}</span>;
        if (status === "Pending") return <span className="badge bg-warning-subtle text-warning">{status}</span>;
      };
  return (
<>
<div className="container py-4 border rounded-3 mt-4 bg-white">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2 ">
        <div className="d-flex gap-2">
          {["All", "Pending", "Completed"].map((tab) => (
            <button
              key={tab}
              className={`btn ${activeTab === tab ? "btn-dark" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "All" ? "All Tests" : tab}
            </button>
          ))}
        </div>
        <button  type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:"#f3ff47"}}>
          + New Test
        </button>
      </div>



      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
     
      <TestLabForm/>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn " style={{backgroundColor:"#f3ff47"}}>Register Tset</button>
      </div>
    </div>
  </div>
</div>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead>
            <tr>
              <th>Test ID</th>
              <th>Patient Name</th>
              <th>Test Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTests.length > 0 ? (
              filteredTests.map((test) => (
                <tr key={test.id}>
                  <td>{test.id}</td>
                  <td>{test.patient}</td>
                  <td>{test.test}</td>
                  <td>{test.date}</td>
                  <td>{getStatusBadge(test.status)}</td>
                  <td className='text-center'><span className="text-primary " style={{ cursor: "pointer" }}>   <i className="fa fa-eye text-primary"></i></span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
</>
  )
}

export default TestLab
