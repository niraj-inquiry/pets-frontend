import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ReportingAnalytics = () => {
    const speciesChartRef = useRef(null);
    const treatmentChartRef = useRef(null);
    const speciesChartInstance = useRef(null);
    const treatmentChartInstance = useRef(null);
    
    // Function to create/update charts
    const createCharts = () => {
        // Clean up existing charts if they exist
        if (speciesChartInstance.current) {
            speciesChartInstance.current.destroy();
        }
        if (treatmentChartInstance.current) {
            treatmentChartInstance.current.destroy();
        }
        
        // Create Species Distribution Chart
        if (speciesChartRef.current) {
            speciesChartInstance.current = new Chart(speciesChartRef.current, {
                type: 'doughnut',
                data: {
                    labels: ['Dogs', 'Cats', 'Birds', 'Rabbits', 'Others'],
                    datasets: [{
                        data: [40, 25, 15, 12, 8],
                        backgroundColor: [
                            '#4e73df', // Blue for Dogs
                            '#36b9cc', // Green for Cats
                            '#f6c23e', // Yellow for Birds
                            '#e74a3b', // Red for Rabbits
                            '#78c2ad'  // Light blue for Others
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: window.innerWidth < 768 ? 'bottom' : 'right',
                        }
                    }
                }
            });
        }
        
        // Create Treatment Success Rate Chart
        if (treatmentChartRef.current) {
            treatmentChartInstance.current = new Chart(treatmentChartRef.current, {
                type: 'bar',
                data: {
                    labels: ['Vaccination', 'Surgery', 'Dental Care', 'Grooming', 'Check-up'],
                    datasets: [{
                        label: 'Success Rate (%)',
                        data: [95, 88, 90, 93, 96],
                        backgroundColor: '#4e73df',
                        borderWidth: 0,
                        borderRadius: 4,
                        barPercentage: 0.6,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        },
                        x: {
                            ticks: {
                                autoSkip: true,
                                maxRotation: 45,
                                minRotation: 45
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    };
    
    useEffect(() => {
        // Create charts when component mounts
        createCharts();
        
        // Add resize event listener to update charts when window size changes
        const handleResize = () => {
            createCharts();
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup function to destroy charts and remove event listener
        return () => {
            if (speciesChartInstance.current) {
                speciesChartInstance.current.destroy();
            }
            if (treatmentChartInstance.current) {
                treatmentChartInstance.current.destroy();
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="dashboard-container p-2 p-md-4 min-vh-100">
            <div className="dashboard-header row mb-3">
                <div className="col-md-8 dashboard-title fs-4 fw-semibold text-dark">Reporting Analytics</div>
                <div className="dropdown col-md-4 d-flex justify-content-end">
                        <div className="d-flex">
                        <button className="btn btn-outline-dark dropdown-toggle filter-dropdown me-3" type="button" id="timeRangeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            Last 7 days
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="timeRangeDropdown">
                            <li><a className="dropdown-item" href="#">Last 7 days</a></li>
                            <li><a className="dropdown-item" href="#">Last 30 days</a></li>
                            <li><a className="dropdown-item" href="#">Last 90 days</a></li>
                        </ul>
                        <button className="btn text-dark fw-semibold export-btn " style={{backgroundColor: "#F3FF47"}}>Export Report</button>
                        </div>
                    </div>
                
            </div>
            
            <div className="row g-3">
                {/* Total Patients Card */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="stat-card bg-white rounded p-3 shadow-sm h-100">
                        <div className="stat-title text-secondary fs-6 mb-2">Total Patients</div>
                        <div className="d-flex align-items-center">
                            <span className="stat-icon me-2">🐾</span>
                            <span className="stat-value fs-4 fw-semibold">3,241</span>
                            <span className="stat-percentage ms-1 text-success fw-medium">+12%</span>
                        </div>
                    </div>
                </div>
                
                {/* Hospital Capacity Card */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="stat-card bg-white rounded p-3 shadow-sm h-100">
                        <div className="stat-title text-secondary fs-6 mb-2">Hospital Capacity</div>
                        <div className="d-flex align-items-center">
                            <span className="stat-icon me-2">🏠</span>
                            <span className="stat-value fs-4 fw-semibold">78%</span>
                            <span className="stat-percentage ms-1 text-danger fw-medium">-3%</span>
                        </div>
                    </div>
                </div>
                
                {/* Treatment Success Rate Card */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="stat-card bg-white rounded p-3 shadow-sm h-100">
                        <div className="stat-title text-secondary fs-6 mb-2">Treatment Success Rate</div>
                        <div className="d-flex align-items-center">
                            <span className="stat-icon me-2">❤️</span>
                            <span className="stat-value fs-4 fw-semibold">92%</span>
                            <span className="stat-percentage ms-1 text-success fw-medium">+8%</span>
                        </div>
                    </div>
                </div>
                
                {/* Revenue Card */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="stat-card bg-white rounded p-3 shadow-sm h-100">
                        <div className="stat-title text-secondary fs-6 mb-2">Revenue</div>
                        <div className="d-flex align-items-center">
                            <span className="stat-icon me-2">💲</span>
                            <span className="stat-value fs-4 fw-semibold">$1.2M</span>
                            <span className="stat-percentage ms-1 text-success fw-medium">+15%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row g-3 mt-1">
                {/* Patient Species Distribution Chart */}
                <div className="col-md-12 col-lg-6">
                    <div className="chart-container bg-white rounded p-3 p-md-4 shadow-sm mb-3">
                        <div className="chart-title fs-5 fw-semibold text-dark mb-3">Patient Species Distribution</div>
                        <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                            <canvas ref={speciesChartRef}></canvas>
                        </div>
                    </div>
                </div>
                
                {/* Treatment Success Rate Chart */}
                <div className="col-md-12 col-lg-6">
                    <div className="chart-container bg-white rounded p-3 p-md-4 shadow-sm mb-3">
                        <div className="chart-title fs-5 fw-semibold text-dark mb-3">Treatment Success Rate by Service</div>
                        <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                            <canvas ref={treatmentChartRef}></canvas>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Recent Patient Records */}
            <div className="records-container bg-white rounded p-3 p-md-4 shadow-sm mt-3">
                <div className="records-header d-flex justify-content-between align-items-center mb-3">
                    <div className="records-title fs-5 fw-semibold text-dark">Recent Patient Records</div>
                    <a href="#" className="view-all text-secondary text-decoration-none">View all</a>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-secondary fw-medium fs-6">Patient Details</th>
                                <th className="text-secondary fw-medium fs-6">Treatment Type</th>
                                <th className="text-secondary fw-medium fs-6">Veterinarian</th>
                                <th className="text-secondary fw-medium fs-6">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Max (Dog - Age 5)</td>
                                <td>Vaccination</td>
                                <td>Dr. Lisa Peterson</td>
                                <td>
                                    <span className="px-2 py-1 bg-success bg-opacity-10 text-success rounded fs-6 fw-medium">Active</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Luna (Cat - Age 3)</td>
                                <td>Grooming</td>
                                <td>Dr. James Wilson</td>
                                <td>
                                    <span className="px-2 py-1 bg-warning bg-opacity-10 text-warning rounded fs-6 fw-medium">Pending</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportingAnalytics;