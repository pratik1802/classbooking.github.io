
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const StudentCalendar = ({ onLogout, schedule }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleClassSelect = (classItem) => {
    setSelectedClass(classItem);
  };

  const handleBookClass = () => {
    if (selectedClass) {
      console.log("Booked Class:", selectedClass);
      setSelectedClass(null);
    }

    alert("Class Booked ")
  };

  return (
    <div className='mt-5'>
      <h2 className='text-center '>Welcome Student !</h2>

      {/* Calendar */}
        <h3 className='text-center'>Calendar</h3>
      <div className='d-flex justify-content-center'>
        <Calendar value={selectedDate} onChange={handleDateSelect} />
      </div>

      {/* Available Classes */}
      <div className='d-flex justify-content-center mt-3 mb-3'>
        <h3>Available Classes:--</h3>
        {schedule.length > 0 ? (
          <ul className='mt-2 text-success fw-bold' style={{cursor:"pointer"}}>
            {schedule.map((classItem, index) => (
              <li
                key={index}
                onClick={() => handleClassSelect(classItem)}
                className={selectedClass === classItem ? "selected" : ""}
              >
                {classItem.date} - {classItem.time} | Teacher: {classItem.teacher}
              </li>
            ))}
          </ul>
        ) : (
          <p className='mt-2 ms-4' >No classes available.</p>
        )}
      </div>

      {/* Book Class */}
      <div className='d-flex justify-content-center'>
        <h3>Book Class:--</h3>
        {selectedClass ? (
          <p className='mt-2 ms-3 me-3'>
            Selected Class: {selectedClass.date} - {selectedClass.time} | Teacher: {selectedClass.teacher}
          </p>
        ) : (
          <p className='ms-4 mt-2'>Select  Available classes to book the class</p>
        )}
        <div>
        <button className='btn btn-warning ms-3' onClick={handleBookClass} disabled={!selectedClass}>
          Book
        </button>
        </div>
      </div>
      <div className='text-center mt-2'>
      <button className='btn btn-danger' onClick={onLogout}>Logout</button>
      </div>

    </div>
  );
};

export default StudentCalendar;
