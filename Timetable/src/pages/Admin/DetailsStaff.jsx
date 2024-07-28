import React, { useState } from 'react';
import Table from '@/components/Shared/Table';
import Modal from '@/components/Shared/Modal';
import '@/assets/css/Table.css'; // Import the CSS for UserTable

const DetailsStaff = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      staffName: "John Doe",
      department: "CSE",
      assignedSubject: "Mathematics",
    },
    {
      staffName: "Jane Smith",
      department: "ECE",
      assignedSubject: "Physics",
    },
    {
      staffName: "Emily Davis",
      department: "IT",
      assignedSubject: "Chemistry",
    },
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
    <div className="user-table-wrapper">
      <div className="user-table-container">
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        <button onClick={() => setModalOpen(true)} className="user-table-add-btn">
          Add
        </button>
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
      </div>
    </div>
  );
}

export default DetailsStaff;
