import React, { useState } from 'react';
import Login from './component/Login';
import TeacherCalendar from './component/TeacherCalendar';
import StudentCalendar from './component/StudentCalendar';

const App = () => {
  const [userType, setUserType] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [schedule, setSchedule] = useState([]);

  const handleLogin = (userType) => {
    setUserType(userType);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUserType(null);
    setLoggedIn(false);
  };

  const handleScheduleClass = (classItem) => {
    setSchedule([...schedule, classItem]);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : userType === 'teacher' ? (
        <TeacherCalendar onLogout={handleLogout} onScheduleClass={handleScheduleClass} />
      ) : (
        <StudentCalendar onLogout={handleLogout} schedule={schedule} />
      )}
    </div>
  );
};

export default App;
