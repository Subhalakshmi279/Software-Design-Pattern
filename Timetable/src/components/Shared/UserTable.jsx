import React from "react";
import "@/assets/css/UserTable.css"; // Ensure to import your CSS

const UserTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="user-table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>Period</th>
            <th>Staff Name</th>
            <th>Department</th>
            <th>Assigned Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.period}</td>
              <td>{row.staffName}</td>
              <td>{row.department}</td>
              <td>{row.assignedSubject}</td>
              <td className="user-actions">
                <button onClick={() => editRow(idx)}>Edit</button>
                <button onClick={() => deleteRow(idx)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
