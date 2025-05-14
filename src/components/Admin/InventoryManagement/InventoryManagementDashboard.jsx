import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import AddNewInventory from "./AddNewInventory";

// Custom CSS
const styles = {
  statsCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "15px 20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    height: "100%",
  },
  statsTitle: {
    color: "#6c757d",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "5px",
  },
  statsValue: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "0",
    color: "#212529",
  },
  iconBadge: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeBlue: {
    backgroundColor: "#e8f0fe",
  },
  badgeYellow: {
    backgroundColor: "#fff8e1",
  },
  badgeRed: {
    backgroundColor: "#ffebee",
  },
  badgeGreen: {
    backgroundColor: "#e8f5e9",
  },
  chartWrapper: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    height: "300px",
  },
  chartTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#212529",
  },
  inventorySection: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  inventoryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px",
  },
  inventoryTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#212529",
  },
  btnDarkCustom: {
    backgroundColor: "#f3ff47",
    color: "black",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "14px",
  },
  btnLightCustom: {
    backgroundColor: "#f8f9fa",
    color: "#212529",
    border: "1px solid #dee2e6",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "14px",
  },
  searchControl: {
    borderRadius: "6px",
    padding: "6px 12px",
    border: "1px solid #dee2e6",
  },
  tableCustom: {
    fontSize: "14px",
  },
  tableHeader: {
    fontWeight: "600",
    color: "#495057",
    borderBottom: "1px solid #dee2e6",
    padding: "10px 16px",
  },
  tableCell: {
    padding: "10px 16px",
    verticalAlign: "middle",
    borderBottom: "1px solid #dee2e6",
  },
  statusPill: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500",
  },
  statusOptimal: {
    backgroundColor: "#e8f5e9",
    color: "#4caf50",
  },
  statusLow: {
    backgroundColor: "#fff8e1",
    color: "#ff9800",
  },
  inputGroupIcon: {
    backgroundColor: "white",
    borderRight: "none",
  },
  searchInput: {
    borderLeft: "none",
  },
  body: {
    padding: "20px",
  },
};

const InventoryManagementDashboard = () => {
  const stockChartRef = useRef(null);
  const categoryChartRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [editingItem, setEditingItem] = useState(null);

  // State for inventory items
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      itemName: "Surgical Masks",
      sku: "MSK-001",
      category: "Medical Supplies",
      stock: 2500,
      unitPrice: "$0.50",
      expiryDate: "2024-12-31",
      status: "Optimal",
      manufacturer: "MedTech Inc.",
      description: "Disposable medical-grade surgical masks",
      storageLocation: "Warehouse A"
    },
    {
      id: 2,
      itemName: "Disposable Gloves",
      sku: "GLV-002",
      category: "Medical Supplies",
      stock: 500,
      unitPrice: "$0.25",
      expiryDate: "2024-06-30",
      status: "Low Stock",
      manufacturer: "SafeGuard Medical",
      description: "Powder-free disposable nitrile gloves",
      storageLocation: "Warehouse B"
    },
  ]);

  const handleCloseModal = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setEditingItem(null);
  };

  const handleOpenModal = () => {
    setAddModalOpen(true);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page when changing entries per page
  };

  const handleEdit = (item) => {
    // Set the editing item and open edit modal
    setEditingItem({
      ...item,
      initialStock: item.stock,
      unitPrice: item.unitPrice.replace('$', '')
    });
    setEditModalOpen(true);
  };
  
  const handleDelete = (item) => {
    // Implement delete functionality
    console.log("Deleting item:", item);
    
    // Show confirmation dialog
    if (window.confirm(`Are you sure you want to delete ${item.itemName}?`)) {
      // Filter out the deleted item
      const updatedItems = inventoryItems.filter(
        (inventoryItem) => inventoryItem.id !== item.id
      );
      setInventoryItems(updatedItems);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle form submission from AddNewInventory for adding new items
  const handleAddInventorySubmit = (formData) => {
    // Create a new inventory item
    const newItem = {
      id: inventoryItems.length + 1,
      itemName: formData.itemName,
      sku: formData.sku,
      category: formData.category,
      stock: parseInt(formData.initialStock),
      unitPrice: `$${parseFloat(formData.unitPrice).toFixed(2)}`,
      expiryDate: formData.expiryDate,
      status: parseInt(formData.initialStock) < 1000 ? "Low Stock" : "Optimal",
      manufacturer: formData.manufacturer,
      description: formData.description,
      storageLocation: formData.storageLocation
    };

    // Add the new item to the inventory
    setInventoryItems([...inventoryItems, newItem]);

    // Close the modal
    handleCloseModal();
  };
  
  // Handle form submission from AddNewInventory for editing existing items
  const handleEditInventorySubmit = (formData) => {
    // Update the existing inventory item
    const updatedItems = inventoryItems.map(item => {
      if (item.id === editingItem.id) {
        return {
          ...item,
          itemName: formData.itemName,
          sku: formData.sku,
          category: formData.category,
          stock: parseInt(formData.initialStock),
          unitPrice: `$${parseFloat(formData.unitPrice).toFixed(2)}`,
          expiryDate: formData.expiryDate,
          status: parseInt(formData.initialStock) < 1000 ? "Low Stock" : "Optimal",
          manufacturer: formData.manufacturer,
          description: formData.description,
          storageLocation: formData.storageLocation
        };
      }
      return item;
    });

    // Update inventory items
    setInventoryItems(updatedItems);

    // Close the modal
    handleCloseModal();
  };

  useEffect(() => {
    // Handle window resize for responsiveness
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Initialize charts
    let stockChart = null;
    let categoryChart = null;

    const initCharts = () => {
      // Destroy existing charts if they exist
      if (stockChart) stockChart.destroy();
      if (categoryChart) categoryChart.destroy(); 

      // Initialize Stock Trends Chart
      if (stockChartRef.current) {
        const stockCtx = stockChartRef.current.getContext("2d");
        stockChart = new Chart(stockCtx, {    
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Stock Level",
                data: [2700, 2500, 2900, 2950, 2850, 2950],
                borderColor: "#4e73df",
                backgroundColor: "rgba(78, 115, 223, 0.1)",
                borderWidth: 2,
                pointBackgroundColor: "#4e73df",
                pointRadius: 3,
                fill: true,
                tension: 0.3,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 3500,
                ticks: {
                  stepSize: 500,
                  font: {
                    size: windowWidth < 768 ? 10 : 12,
                  },
                },
                grid: {
                  color: "rgba(0, 0, 0, 0.05)",
                },
              },
              x: {
                grid: {
                  color: "rgba(0, 0, 0, 0.05)",
                },
                ticks: {
                  font: {
                    size: windowWidth < 768 ? 10 : 12,
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleFont: {
                  size: 13,
                },
                bodyFont: {
                  size: 12,
                },
                padding: 10,
                displayColors: false,
              },
            },
          },
        });
      }

      // Initialize Category Distribution Chart
      if (categoryChartRef.current) {
        const categoryCtx = categoryChartRef.current.getContext("2d");
        categoryChart = new Chart(categoryCtx, {
          type: "doughnut",
          data: {
            labels: [
              "Medical Supplies",
              "General Supplies",
              "Pharmaceuticals",
              "Equipment",
            ],
            datasets: [
              {
                data: [40, 20, 25, 15],
                backgroundColor: [
                  "#4e73df", // Medical - Blue
                  "#f04a5c", // General - Red
                  "#ffc107", // Pharma - Yellow
                  "#4caf50", // Equipment - Green
                ],
                borderWidth: 0,
                hoverOffset: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "65%",
            plugins: {
              legend: {
                position: windowWidth < 768 ? "bottom" : "right",
                labels: {
                  boxWidth: 12,
                  padding: 15,
                  font: {
                    size: windowWidth < 768 ? 10 : 12,
                  },
                },
              },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleFont: {
                  size: 13,
                },
                bodyFont: {
                  size: 12,
                },
                padding: 10,
                callbacks: {
                  label: function (context) {
                    return `${context.label}: ${context.parsed}%`;
                  },
                },
              },
            },
          },
        });
      }
    };

    // Initialize charts
    initCharts();

    // Re-initialize charts on window resize for better responsiveness
    const resizeObserver = new ResizeObserver(() => {
      initCharts();
    });

    if (stockChartRef.current) {
      resizeObserver.observe(stockChartRef.current.parentNode);
    }

    if (categoryChartRef.current) {
      resizeObserver.observe(categoryChartRef.current.parentNode);
    }

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      if (stockChart) stockChart.destroy();
      if (categoryChart) categoryChart.destroy();
    };
  }, [windowWidth]);

  return (
    <>
      <div style={styles.body}>
        <Container fluid>
          <h4 className="mb-3">Inventory Management</h4>
          {/* Stats Row */}
          <Row className="mb-4">
            <Col lg={3} md={6} sm={6} className="mb-3 mb-lg-0">
              <div
                style={styles.statsCard}
                className="d-flex justify-content-between align-items-center">
                <div>
                  <div style={styles.statsTitle}>Total Items</div>
                  <div style={styles.statsValue}>{inventoryItems.length}</div>
                </div>
                <div style={{ ...styles.iconBadge, ...styles.badgeBlue }}>
                  <i className="bi bi-box-seam text-primary"></i>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className="mb-3 mb-lg-0">
              <div
                style={styles.statsCard}
                className="d-flex justify-content-between align-items-center">
                <div>
                  <div style={styles.statsTitle}>Low Stock Items</div>
                  <div style={styles.statsValue}>
                    {
                      inventoryItems.filter(
                        (item) => item.status === "Low Stock"
                      ).length
                    }
                  </div>
                </div>
                <div style={{ ...styles.iconBadge, ...styles.badgeYellow }}>
                  <i className="bi bi-exclamation-triangle-fill text-warning"></i>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className="mb-3 mb-lg-0">
              <div
                style={styles.statsCard}
                className="d-flex justify-content-between align-items-center">
                <div>
                  <div style={styles.statsTitle}>Expiring Soon</div>
                  <div style={styles.statsValue}>45</div>
                </div>
                <div style={{ ...styles.iconBadge, ...styles.badgeRed }}>
                  <i className="bi bi-exclamation-circle-fill text-danger"></i>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div
                style={styles.statsCard}
                className="d-flex justify-content-between align-items-center">
                <div>
                  <div style={styles.statsTitle}>Total Value</div>
                  <div style={styles.statsValue}>$1.2M</div>
                </div>
                <div style={{ ...styles.iconBadge, ...styles.badgeGreen }}>
                  <i className="bi bi-currency-dollar text-success"></i>
                </div>
              </div>
            </Col>
          </Row>

          {/* Charts Row */}
          <Row className="mb-4">
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <div style={styles.chartWrapper}>
                <div style={styles.chartTitle}>Stock Level Trends</div>
                <div
                  style={{
                    position: "relative",
                    height: "90%",
                    width: "100%",
                  }}>
                  <canvas ref={stockChartRef}></canvas>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div style={styles.chartWrapper}>
                <div style={styles.chartTitle}>Category Distribution</div>
                <div
                  style={{
                    position: "relative",
                    height: "90%",
                    width: "100%",
                  }}>
                  <canvas ref={categoryChartRef}></canvas>
                </div>
              </div>
            </Col>
          </Row>

          {/* Inventory Section */}
          <div style={styles.inventorySection}>
            <div style={styles.inventoryHeader}>
              <div style={styles.inventoryTitle}>Inventory Items</div>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  style={styles.btnDarkCustom}
                  className="me-2 fw-semibold"
                  onClick={handleOpenModal}>
                  <i className="bi bi-plus me-1"></i> Add New Item
                </Button>
                <Button style={styles.btnLightCustom}>
                  <i className="bi bi-box-arrow-up me-1"></i> Export
                </Button>
              </div>
            </div>

            {/* Search and Filter Row */}
            <Row className="mb-4">
              <Col lg={6} md={12} className="mb-3 mb-lg-0">
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={styles.inputGroupIcon}>
                    <i className="bi bi-search text-muted"></i>
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="Search items..."
                    style={{ ...styles.searchControl, ...styles.searchInput }}
                  />
                </div>
              </Col>
              <Col lg={3} md={6} className="mb-3 mb-lg-0">
                <Form.Select style={styles.searchControl}>
                  <option>All Categories</option>
                  <option>Medical Supplies</option>
                  <option>General Supplies</option>
                  <option>Pharmaceuticals</option>
                  <option>Equipment</option>
                </Form.Select>
              </Col>
              <Col lg={3} md={6}>
                <Form.Select style={styles.searchControl}>
                  <option>All Departments</option>
                  <option>Emergency</option>
                  <option>Surgery</option>
                  <option>Pediatrics</option>
                  <option>Administration</option>
                </Form.Select>
              </Col>
            </Row>

            {/* Inventory Table */}
            <div className="table-responsive">
              <Table style={styles.tableCustom}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Item Name</th>
                    <th style={styles.tableHeader}>SKU</th>
                    <th style={styles.tableHeader}>Category</th>
                    <th style={styles.tableHeader}>Stock</th>
                    <th style={styles.tableHeader}>Unit Price</th>
                    <th style={styles.tableHeader}>Expiry Date</th>
                    <th style={styles.tableHeader}>Status</th>
                    <th style={styles.tableHeader}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item) => (
                    <tr key={item.id}>
                      <td style={styles.tableCell}>{item.itemName}</td>
                      <td style={styles.tableCell}>{item.sku}</td>
                      <td style={styles.tableCell}>{item.category}</td>
                      <td style={styles.tableCell}>{item.stock}</td>
                      <td style={styles.tableCell}>{item.unitPrice}</td>
                      <td style={styles.tableCell}>{item.expiryDate}</td>
                      <td style={styles.tableCell}>
                        <span
                          style={{
                            ...styles.statusPill,
                            ...(item.status === "Optimal"
                              ? styles.statusOptimal
                              : styles.statusLow),
                          }}>
                          {item.status}
                        </span>
                      </td>
                      <td style={styles.tableCell}>
                        <button
                          className="pet-mgmt-action-btn"
                          onClick={() => handleEdit(item)}>
                          <i className="fa-solid fa-pen-to-square text-info mx-2"></i>
                        </button>
                        <button
                          className="pet-mgmt-action-btn"
                          onClick={() => handleDelete(item)}>
                          <i className="fa-solid fa-trash text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pet-mgmt-pagination">
              <div className="d-flex align-items-center w-100 w-md-auto">
                <span className="me-2">Show</span>
                <select
                  className="form-select form-select-sm"
                  style={{ width: 70 }}
                  value={entriesPerPage}
                  onChange={handleEntriesPerPageChange}>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="ms-2">entries</span>
              </div>
              <nav className="w-100 w-md-auto">
                <ul className="pagination mb-0 justify-content-end">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}>
                    <button
                      className="page-link ms-1 rounded text-dark"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}>
                      Previous
                    </button>
                  </li>
                  {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
                    <li
                      key={i + 1}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}>
                      <button
                        className={`page-link ms-1 rounded ${
                          currentPage === i + 1 ? "bg-dark" : "text-dark"
                        }`}
                        onClick={() => handlePageChange(i + 1)}>
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}>
                    <button
                      className="page-link ms-1 rounded text-dark"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </div>

      {/* Add New inventory Modal */}
      {addModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Item</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <AddNewInventory onSubmit={handleAddInventorySubmit} onCancel={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-backdrop fade show"></div>
        </>
      )}
      
      {/* Edit Inventory Modal */}
      {editModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Item</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <AddNewInventory 
                    itemData={editingItem} 
                    onSubmit={handleEditInventorySubmit} 
                    onCancel={handleCloseModal}
                    isEditing={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};

export default InventoryManagementDashboard;