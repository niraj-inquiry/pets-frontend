import React, { useRef, useEffect, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { height } from '@mui/system';

const AppointmentCalendar = ({ onAppointmentSave }) => {
  const calendarRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    patientName: '',
    duration: '30 minutes',
    phoneNumber: '',
    email: '',
    doctor: 'Dr. Wilson',
    notes: ''
  });

  useEffect(() => {
    // Initialize calendar only after component has mounted
    const calendar = new Calendar(calendarRef.current, {
      plugins: [timeGridPlugin, interactionPlugin],
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay',
      },
      slotDuration: '00:15:00',
      slotLabelInterval: '01:00:00',
      allDaySlot: false,
      nowIndicator: true,
      selectable: true,
      selectMirror: true,
      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
        startTime: '08:00',
        endTime: '18:00',
      },
      select: function(info) {
        // When a time slot is selected
        const formattedDate = info.startStr.split('T')[0];
        const formattedTime = info.startStr.split('T')[1].substr(0, 5);
        setSelectedDate(formattedDate);
        setSelectedTime(formattedTime);
        setShowModal(true);
      },
      eventClick: function(info) {
        // When an existing appointment is clicked
        // You could populate the form with existing data here
        alert(`Appointment details: ${info.event.title}`);
      }
    });

    calendar.render();

    // Cleanup the calendar instance when the component unmounts
    return () => {
      calendar.destroy();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an event object for the calendar
    const eventData = {
      title: formData.patientName,
      start: `${selectedDate}T${selectedTime}`,
      end: calculateEndTime(selectedDate, selectedTime, formData.duration),
      extendedProps: {
        ...formData,
        date: selectedDate,
        time: selectedTime
      }
    };
    
    // Pass the data up to parent component if needed
    if (onAppointmentSave) {
      onAppointmentSave(eventData);
    }
    
    // Add the event to the calendar
    const calendar = new Calendar(calendarRef.current);
    calendar.addEvent(eventData);
    
    // Reset form and close modal
    resetForm();
  };

  const calculateEndTime = (date, time, duration) => {
    const [hours, minutes] = time.split(':').map(Number);
    let durationMinutes = 30; // default
    
    if (duration === '15 minutes') durationMinutes = 15;
    if (duration === '30 minutes') durationMinutes = 30;
    if (duration === '45 minutes') durationMinutes = 45;
    if (duration === '60 minutes') durationMinutes = 60;
    
    const endDate = new Date(`${date}T${time}`);
    endDate.setMinutes(endDate.getMinutes() + durationMinutes);
    
    return endDate.toISOString();
  };

  const resetForm = () => {
    setFormData({
      patientName: '',
      duration: '30 minutes',
      phoneNumber: '',
      email: '',
      doctor: 'Dr. Wilson',
      notes: ''
    });
    setShowModal(false);
  };

  return (
    <div>
      <div ref={calendarRef}></div>
      
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" style={styles.modalOverlay}>
          <div className="modal-content" style={styles.modalContent}>
            <div className="modal-header" style={styles.modalHeader}>
              <h5>New Appointment</h5>
              <button 
                onClick={() => setShowModal(false)}
                style={styles.closeButton}
              >×</button>
            </div>
            
            <div className="modal-body" style={styles.modalBody}>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Selected Date:</label>
                  <div>{selectedDate}</div>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Selected Time:</label>
                  <div>{selectedTime}</div>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Patient Name</label>
                  <input 
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    style={styles.formControl}
                    required
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Duration</label>
                  <select 
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    style={styles.formControl}
                  >
                    <option value="15 minutes">15 minutes</option>
                    <option value="30 minutes">30 minutes</option>
                    <option value="45 minutes">45 minutes</option>
                    <option value="60 minutes">60 minutes</option>
                  </select>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone Number</label>
                  <input 
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    style={styles.formControl}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.formControl}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Doctor</label>
                  <select 
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    style={styles.formControl}
                  >
                    <option value="Dr. Wilson">Dr. Wilson</option>
                    <option value="Dr. Brown">Dr. Brown</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                  </select>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Notes</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    style={styles.notesArea}
                  ></textarea>
                </div>
                
                <div style={styles.modalFooter}>
                  <button 
                    type="button" 
                    onClick={resetForm}
                    style={styles.cancelButton}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    style={styles.saveButton}
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentCalendar;

// Additional styles for the modal
const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '500px',
    maxWidth: '90%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    height:"100vh",
    overflowY:"scroll"
  },
  modalHeader: {
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '0',
    lineHeight: '1'
  },
  modalBody: {
    padding: '20px'
  },
  modalFooter: {
    padding: '15px 0 0',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  formLabel: {
    fontWeight: 500,
    marginBottom: '5px',
    display: 'block'
  },
  formControl: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  notesArea: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '80px',
    resize: 'none'
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  saveButton: {
    backgroundColor: '#000',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};