import React, { useRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Link } from "react-router-dom";

function CommunicationCalender() {
  const calendarRef = useRef(null);

  useEffect(() => {
    // Initialize calendar only after component has mounted
    const calendar = new Calendar(calendarRef.current, {
      plugins: [timeGridPlugin],
      initialView: "timeGridWeek",
      headerToolbar: {
        left: "prev,next",
        center: "title",
        right: "timeGridWeek,timeGridDay", // user can switch between the two
      },
    });

    calendar.render();

    // Cleanup the calendar instance when the component unmounts
    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <>
      <div className="mb-4 d-flex justify-content-between">

        <Link to="https://app.zoom.us/wc" target="_blank">
          <button className="btn " style={{ backgroundColor: "#f3ff47" }}>
            <i class="fa-solid fa-plus me-2 " style={{ border: "none" }}></i>New
            Meeting
          </button>
        </Link>
        <Link to="/telecommunication">
        <button className="btn btn-outline-dark">
          <i className="fa-solid fa-arrow-left me-2"></i>
          Back
        </button>
        </Link>
      </div>
      <div ref={calendarRef}></div>
    </>
  );
}

export default CommunicationCalender;
