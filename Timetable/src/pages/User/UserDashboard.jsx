import React from 'react';
import '@/assets/css/UserDashboard.css';

const scheduleData = [
  { day: 'Monday', periods: ['CSE-A, Java', 'IT-B, C++', 'EEE-C, Python', 'ECE-A, Java', 'CIVIL-B, C++', 'MECH-C, Python'] },
  { day: 'Tuesday', periods: ['CSE-B, C++', 'IT-C, Python', 'EEE-A, Java', 'ECE-B, C++', 'CIVIL-C, Python', 'MECH-A, Java'] },
  { day: 'Wednesday', periods: ['CSE-C, Python', 'IT-A, Java', 'EEE-B, C++', 'ECE-C, Python', 'CIVIL-A, Java', 'MECH-B, C++'] },
  { day: 'Thursday', periods: ['CSE-A, Java', 'IT-B, C++', 'EEE-C, Python', 'ECE-A, Java', 'CIVIL-B, C++', 'MECH-C, Python'] },
  { day: 'Friday',   periods: ['CSE-B, C++', 'IT-C, Python', 'EEE-A, Java', 'ECE-B, C++', 'CIVIL-C, Python', 'MECH-A, Java'] },
  { day: 'Saturday', periods: ['CSE-C, Python', 'IT-A, Java', 'EEE-B, C++', 'ECE-C, Python', 'CIVIL-A, Java', 'MECH-B, C++'] },
];

const UserDashboard = () => {
  return (
    <div className="schedule-table-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Period/Day</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((entry) => (
            <tr key={entry.day}>
              <td>{entry.day}</td>
              {entry.periods.map((period, index) => (
                <td key={index}>{period}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
