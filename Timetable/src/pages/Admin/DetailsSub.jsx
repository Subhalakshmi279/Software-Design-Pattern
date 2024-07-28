import React, { useState } from 'react';
import SubjectTable from '@/components/Shared/SubjectTable';
import SubjectModal from '@/components/Shared/SubjectModal';
import '@/assets/css/DetailsSub.css';

const DetailsSub = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    { subjectName: "Mathematics", subjectCode: "MATH101", department: "CSE" },
    { subjectName: "Physics", subjectCode: "PHY101", department: "ECE" },
    { subjectName: "Chemistry", subjectCode: "CHEM101", department: "IT" },
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
    <div className="details-sub-container">
      <div className="details-sub-table-container">
        <SubjectTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="details-sub-add-btn">
        Add Subject
      </button>
      </div>
      {modalOpen && (
        <SubjectModal
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

export default DetailsSub;
