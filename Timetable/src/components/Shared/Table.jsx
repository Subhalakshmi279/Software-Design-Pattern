import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import '@/assets/css/UserTable.css'; // Import the updated CSS

const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Department</th>
            <th className="expand">Assigned Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.staffName}</td>
              <td>{row.department}</td>
              <td className="expand">{row.assignedSubject}</td>
              <td className="fit">
                <span className="actions">
                  <BsFillTrashFill
                    className="delete-btn"
                    onClick={() => deleteRow(idx)}
                  />
                  <BsFillPencilFill
                    className="edit-btn"
                    onClick={() => editRow(idx)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
