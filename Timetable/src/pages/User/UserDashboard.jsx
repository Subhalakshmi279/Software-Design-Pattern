import React, { useState } from 'react';
import UserTable from '@/components/Shared/UserTable';
import UserModal from '@/components/Shared/UserModal';
import '@/assets/css/UserDashboard.css'; // Import the CSS for UserDashboard

const UserDashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    { period: "1", staffName: "John Doe", department: "CSE", assignedSubject: "Mathematics" },
    { period: "2", staffName: "Jane Smith", department: "ECE", assignedSubject: "Physics" },
    { period: "3", staffName: "Emily Davis", department: "IT", assignedSubject: "Chemistry" },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  return (
    <div className="user-dashboard-container">
      <div className="user-dashboard-table-container">
        <UserTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        <button onClick={() => setModalOpen(true)} className="user-dashboard-add-btn">
          Add Entry
        </button>
      </div>
      {modalOpen && (
        <UserModal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
};

export default UserDashboard;
