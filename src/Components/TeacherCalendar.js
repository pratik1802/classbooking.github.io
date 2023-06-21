import React, { useState } from 'react';
import Calendar from 'react-calendar';

const TeacherCalendar = ({ onLogout, onScheduleClass }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleTeacherSelect = (event) => {
    setSelectedTeacher(event.target.value);
  };

  const handleScheduleClass = () => {
    if (!selectedDate || !selectedTime || !selectedTeacher) {
      alert('Please select a date, time, and teacher');
      return;
    }

    const classItem = {
      date: selectedDate.toDateString(),
      time: selectedTime,
      teacher: selectedTeacher
    };

    onScheduleClass(classItem);
    setSelectedTime('');
    setSelectedTeacher('');


    alert("Class Schedule Successfully")
  };

  return (
    <div>
      <h2 className='text-center'>Welcome Teacher !</h2>

      {/* Calendar */}
        <h3 className='text-center'>Calendar</h3>
      <div className='d-flex justify-content-center my-4'>
        <Calendar value={selectedDate} onChange={handleDateSelect} />
      </div>

      {/* Schedule Class */}
      <div className='d-flex justify-content-center my-3'>
        <h3 className='me-5'>Schedule Class :--</h3>
        <div>
          <label>Date:</label>
          <p>{selectedDate.toDateString()}</p>
        </div>
        <div>
          <label className='ms-2'>Time:</label>
          <select className='ms-2' value={selectedTime} onChange={handleTimeSelect}>
            <option value="">Select Time</option>
            <option value="8am">8:00 AM</option>
            <option value="9am">9:00 AM</option>
            <option value="10am">10:00 AM</option>
            <option value="11am">11:00 AM</option>
            <option value="12pm">12:00 PM</option>
            <option value="1pm">1:00 PM</option>
            <option value="2pm">2:00 PM</option>
            <option value="3pm">3:00 PM</option>
            <option value="4pm">4:00 PM</option>
            <option value="5pm">5:00 PM</option>
          </select>
        </div>
        <div>
          <label className='ms-4'>Teacher:</label>
          <select className='ms-2' value={selectedTeacher} onChange={handleTeacherSelect}>
            <option value="">Select Teacher</option>
            <option value="Shreyas">Shreyas</option>
            <option value="Pushkar">Pushkar</option>
            <option value="Payal">Payal</option>
            {/* Add more teacher options as needed */}
          </select>
        </div>
        <div>
        <button className='btn btn-warning btn-sm ms-2' onClick={handleScheduleClass}>Schedule</button>
        </div>
      </div>
      <div className='text-center my-4'>
      <button className='btn btn-danger ms-3' onClick={onLogout}>Logout</button>
      </div>

    </div>
  );
};

export default TeacherCalendar;
