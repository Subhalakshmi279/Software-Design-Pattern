import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import '@/assets/css/SubjectTable.css';

const SubjectTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="subject-table-wrapper">
      <table className="subject-table">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th className="subject-expand">Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.subjectName}</td>
              <td>{row.subjectCode}</td>
              <td className="subject-expand">{row.department}</td>
              <td className="subject-fit">
                <span className="subject-actions">
                  <BsFillTrashFill
                    className="subject-delete-btn"
                    onClick={() => deleteRow(idx)}
                  />
                  <BsFillPencilFill
                    className="subject-edit-btn"
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

export default SubjectTable;
