import React, { useState } from 'react'
import AddNewPatient from './AddNewPatient';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const PatientManagement = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  
  // Define patient data as state
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      imageUrl: "https://placedog.net/40/40",
      owner: "John Smith",
      phone: "+1 (555) 123-4567",
      email: "john.smith@email.com",
      lastVisit: "March 15, 2024",
      status: "active"
    },
    {
      id: 2,
      name: "Luna",
      type: "Cat",
      breed: "Siamese",
      imageUrl: "https://i.ibb.co/vryZvdv/download.jpg",
      owner: "Emily Johnson",
      phone: "+1 (555) 234-5678",
      email: "emily.j@email.com",
      lastVisit: "March 18, 2024",
      status: "active"
    },
    {
      id: 3,
      name: "Rocky",
      type: "Dog",
      breed: "German Shepherd",
      imageUrl: "https://placedog.net/41/41",
      owner: "Michael Brown",
      phone: "+1 (555) 345-6789",
      email: "michael.b@email.com",
      lastVisit: "March 20, 2024",
      status: "pending"
    },
    {
      id: 4,
      name: "Bella",
      type: "Cat",
      breed: "Persian",
      imageUrl: "https://i.ibb.co/WpRcm72C/images.jpg",
      owner: "Sarah Wilson",
      phone: "+1 (555) 456-7890",
      email: "sarah.w@email.com",
      lastVisit: "March 22, 2024",
      status: "inactive"
    }
  ]);

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [petTypeFilter, setPetTypeFilter] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  // State for modal management
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    type: "",
    breed: "",
    owner: "",
    phone: "",
    email: "",
    lastVisit: "",
    status: ""
  });
  
  // State for new patient form
  const [newPatientFormData, setNewPatientFormData] = useState({
    name: "",
    type: "Dog",
    breed: "",
    owner: "",
    phone: "",
    email: "",
    lastVisit: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    status: "active"
  });

  // Search and filter functionality
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          patient.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          patient.breed.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = petTypeFilter === "" || patient.type === petTypeFilter;
    
    return matchesSearch && matchesType;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPatients.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const displayedPatients = filteredPatients.slice(startIndex, startIndex + entriesPerPage);

  // Handlers for search, filter, and pagination
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePetTypeChange = (e) => {
    setPetTypeFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page on entries change
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Action button handlers
  const handleView = (patient) => {
    // Navigate to patient details page with patient ID
    navigate(`/patient/${patient.id}`, { state: { patient } });
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setEditFormData({
      name: patient.name,
      type: patient.type,
      breed: patient.breed,
      owner: patient.owner,
      phone: patient.phone,
      email: patient.email,
      lastVisit: patient.lastVisit,
      status: patient.status
    });
    setEditModalOpen(true);
  };

  const handleDelete = (patient) => {
    setSelectedPatient(patient);
    setDeleteModalOpen(true);
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };
  
  // Handler for new patient form input changes
  const handleNewPatientInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatientFormData({
      ...newPatientFormData,
      [name]: value
    });
  };

  const handleSaveEdit = () => {
    if (selectedPatient) {
      const updatedPatients = patients.map(patient => 
        patient.id === selectedPatient.id ? 
        { ...patient, ...editFormData } : 
        patient
      );
      setPatients(updatedPatients);
      setEditModalOpen(false);
    }
  };

  const handleConfirmDelete = () => {
    if (selectedPatient) {
      const updatedPatients = patients.filter(patient => 
        patient.id !== selectedPatient.id
      );
      setPatients(updatedPatients);
      setDeleteModalOpen(false);
    }
  };

  const handleAddNewPatient = () => {
    // Reset form data for new patient
    setNewPatientFormData({
      name: "",
      type: "Dog",
      breed: "",
      owner: "",
      phone: "",
      email: "",
      lastVisit: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      status: "active"
    });
    
    setAddModalOpen(true);
  };

  const handleSaveNewPatient = (e) => {
    e.preventDefault();
    
    const newPatient = {
      id: patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1,
      ...newPatientFormData,
      imageUrl: "/api/placeholder/40/40"
    };
    
    setPatients([...patients, newPatient]);
    setAddModalOpen(false);
  };

  const handleSubmitEditForm = (e) => {
    e.preventDefault();
    handleSaveEdit();
  };
  
  const handleCloseModal = () => {
    setAddModalOpen(false);
  };
  
  return (
    <>
      <div className="container py-4">
        <div className="pet-mgmt-header">
          <h2>Patient Management</h2>
        </div>
        <div className="card p-3 my-4">
          <div className="row my-2">
            <div className="col-md-8 my-2">
              <div className="pet-mgmt-search-bar flex-grow-1 me-3">
                <i className="bi bi-search pet-mgmt-search-icon" />
                <input
                  type="text"
                  className="form-control pet-mgmt-search-input"
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="col-md-2 my-2">
              <select 
                className="form-select me-3"
                value={petTypeFilter}
                onChange={handlePetTypeChange}
              >
                <option value="">Pet Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div className="col-md-2 my-2">
              <button 
                className="pet-mgmt-add-btn w-100"
                onClick={handleAddNewPatient}
              >
                <i className="bi bi-plus-lg me-1" />
                Add New Patient
              </button>
            </div>
          </div>
          <div className="pet-mgmt-table table table-responsive border rounded">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Pet Type and Name</th>
                  <th>Owner</th>
                  <th>Contact</th>
                  <th>Last Visit</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedPatients.length > 0 ? (
                  displayedPatients.map(patient => (
                    <tr key={patient.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={patient.imageUrl}
                            className="pet-mgmt-pet-img me-3"
                            alt={patient.name}
                            width="40"
                            height="40"
                          />
                          <div>
                            <div className="fw-semibold">{patient.name} ({patient.type})</div>
                            <small className="text-muted">{patient.breed}</small>
                          </div>
                        </div>
                      </td>
                      <td>{patient.owner}</td>
                      <td>
                        <div>{patient.phone}</div>
                        <small className="text-muted">{patient.email}</small>
                      </td>
                      <td>{patient.lastVisit}</td>
                      <td>
                        <span className={`pet-mgmt-status pet-mgmt-status-${patient.status}`}>
                          {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                        </span>
                      </td>
                      <td className="text-end">
                        <button 
                          className="pet-mgmt-action-btn"
                          onClick={() => handleView(patient)}
                        >
                          <i className="fa-solid fa-eye text-primary"></i>
                        </button>
                        <button 
                          className="pet-mgmt-action-btn"
                          onClick={() => handleEdit(patient)}
                        >
                          <i className="fa-solid fa-pen-to-square text-info mx-2"></i>
                        </button>
                        <button 
                          className="pet-mgmt-action-btn"
                          onClick={() => handleDelete(patient)}
                        >
                          <i className="fa-solid fa-trash text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3">No patients found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pet-mgmt-pagination">
            <div className="d-flex align-items-center w-100 w-md-auto">
              <span className="me-2">Show</span>
              <select 
                className="form-select form-select-sm" 
                style={{ width: 70 }}
                value={entriesPerPage}
                onChange={handleEntriesPerPageChange}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="ms-2">entries</span>
            </div>
            <nav className="w-100 w-md-auto">
              <ul className="pagination mb-0 justify-content-end">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link ms-1 rounded text-dark"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
                  <li 
                    key={i + 1} 
                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                  >
                    <button 
                      className={`page-link ms-1 rounded ${currentPage === i + 1 ? 'bg-dark' : 'text-dark'}`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link ms-1 rounded text-dark"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Edit Patient Modal */}
      {editModalOpen && selectedPatient && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Patient</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setEditModalOpen(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmitEditForm}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="type" className="form-label">Type</label>
                      <select 
                        className="form-select" 
                        id="type" 
                        name="type"
                        value={editFormData.type}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                      </select>
                    </div>
                    <div className="col">
                      <label htmlFor="breed" className="form-label">Breed</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="breed" 
                        name="breed"
                        value={editFormData.breed}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="owner" className="form-label">Owner</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="owner" 
                      name="owner"
                      value={editFormData.owner}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={editFormData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={editFormData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="lastVisit" className="form-label">Last Visit</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="lastVisit" 
                        name="lastVisit"
                        value={editFormData.lastVisit}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="status" className="form-label">Status</label>
                      <select 
                        className="form-select" 
                        id="status" 
                        name="status"
                        value={editFormData.status}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-outline-dark" 
                    onClick={() => setEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn fw-semibold"
                    style={{
                      backgroundColor:"#f3ff47",
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Add New Patient Modal */}
      {addModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                <AddNewPatient />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        </>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && selectedPatient && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setDeleteModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete the patient record for <strong>{selectedPatient.name}</strong>?</p>
                <p className="text-danger"><small>This action cannot be undone.</small></p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-outline-dark" 
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PatientManagement 