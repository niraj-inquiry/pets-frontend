import React, { useState } from 'react';
import AppointmentCalendar from './AppointmentCalendar';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  
  // Function to handle saving appointment data from the calendar modal
  const handleAppointmentSave = (appointmentData) => {
    setAppointments([...appointments, appointmentData]);
    // You could also send this data to your backend API here
  };
  
  return (
    <>
     <div className='container'>
      
      <div className="appointment-header d-flex justify-content-between mb-3 mt-3">
      <h4>Book Appointment</h4>
        <div className='me-3 d-flex align-items-center'>
          <img src="https://i.ibb.co/nqgpZFJc/download.jpg" alt="Patient" width="40px" style={{borderRadius:"50%"}} />
          <div className='ms-2'>Patient ID: #12345</div>
        </div>
      </div>
      
      <div className='row'>
        {/* Left Column - Filters */}
        <div className='col-md-3'>
          <div style={styles.contentPanel}>
            <h5 style={styles.sectionTitle}>Schedule Filters</h5>
            
            <div style={styles.filterCheckbox}>
              <input 
                type="checkbox" 
                id="recheckFilter" 
                style={styles.checkboxRecheck} 
              />
              <label htmlFor="recheckFilter" style={styles.checkboxLabel}>Recheck</label>
            </div>
            
            <div style={styles.filterCheckbox}>
              <input 
                type="checkbox" 
                id="newPatientFilter" 
                style={styles.checkboxNew} 
              />
              <label htmlFor="newPatientFilter" style={styles.checkboxLabel}>New Patient</label>
            </div>
            
            <div style={styles.filterCheckbox}>
              <input 
                type="checkbox" 
                id="nurseVisitFilter" 
                style={styles.checkboxNurse} 
              />
              <label htmlFor="nurseVisitFilter" style={styles.checkboxLabel}>Nurse Visit</label>
            </div>
            
            <div style={styles.filterCheckbox}>
              <input 
                type="checkbox" 
                id="emergencySlotFilter" 
                style={styles.checkboxEmergency} 
              />
              <label htmlFor="emergencySlotFilter" style={styles.checkboxLabel}>Emergency Slot</label>
            </div>
          </div>
        </div>
        
        {/* Middle Column - Schedule */}
        <div className='col-md-6'>
          <div style={styles.contentPanel}>
            <AppointmentCalendar onAppointmentSave={handleAppointmentSave} />
          </div>
        </div>
        
        {/* Right Column - Appointment Details */}
        <div className='col-md-3'>
          <div style={styles.contentPanel}>
            <h5 style={styles.sectionTitle}>Recent Appointments</h5>
            
            {appointments.length > 0 ? (
              <div>
                {appointments.map((appointment, index) => (
                  <div key={index} style={styles.appointmentSummary}>
                    <div style={styles.appointmentName}>{appointment.title}</div>
                    <div style={styles.appointmentDetails}>
                      {new Date(appointment.start).toLocaleDateString()} at {new Date(appointment.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                    <div style={styles.appointmentDoctor}>{appointment.extendedProps.doctor}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No appointments scheduled yet. Click on the calendar to create one.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Appointment;

const styles = {
  contentPanel: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '15px',
  },
  sectionTitle: {
    fontWeight: 600,
    marginBottom: '15px',
  },
  filterCheckbox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  checkboxLabel: {
    marginLeft: '10px',
    marginBottom: 0,
  },
  checkboxRecheck: {
    accentColor: '#333',
  },
  checkboxNew: {
    accentColor: '#4CAF50',
  },
  checkboxNurse: {
    accentColor: '#2196F3',
  },
  checkboxEmergency: {
    accentColor: '#F44336',
  },
  appointmentSummary: {
    padding: '10px',
    marginBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  appointmentName: {
    fontWeight: 500,
    marginBottom: '3px',
  },
  appointmentDetails: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '3px',
  },
  appointmentDoctor: {
    color: '#666',
    fontSize: '14px',
  },
};