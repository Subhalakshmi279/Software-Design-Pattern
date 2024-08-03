import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '@/assets/css/Timetable.css';

const initialData = [
  { id: 1, period: 1, subject: 'Data Structures', staff: 'Prof. John Doe' },
  { id: 2, period: 2, subject: 'Algorithms', staff: 'Prof. Jane Smith' },
  { id: 3, period: 3, subject: 'Computer Networks', staff: 'Prof. Alice Johnson' },
  { id: 4, period: 4, subject: 'Operating Systems', staff: 'Prof. Bob Brown' },
  { id: 5, period: 5, subject: 'Database Systems', staff: 'Prof. Carol White' },
  { id: 6, period: 6, subject: 'Software Engineering', staff: 'Prof. David Green' }
];

const Timetable = () => {
  const [timetableData, setTimetableData] = useState(initialData);
  const [showPopup, setShowPopup] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAdd = () => {
    setEditData({ period: '', subject: '', staff: '' });
    setShowPopup(true);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    setTimetableData(timetableData.filter(item => item.id !== id));
  };

  const handleSubmit = () => {
    if (editData.id) {
      setTimetableData(timetableData.map(item => item.id === editData.id ? editData : item));
    } else {
      setTimetableData([...timetableData, { ...editData, id: timetableData.length + 1 }]);
    }
    setShowPopup(false);
    setEditData(null);
  };

  return (
    <div className="container">
      <div className="timetable">
        <h1 className="title">Timetable</h1>
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Subject</th>
              <th>Staff</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map(item => (
              <tr key={item.id}>
                <td>{item.period}</td>
                <td>{item.subject}</td>
                <td>{item.staff}</td>
                <td className="actions">
                  <FaEdit onClick={() => handleEdit(item)} className="icon edit" />
                  <FaTrash onClick={() => handleDelete(item.id)} className="icon delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAdd} className="add-button">Add</button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{editData.id ? 'Edit' : 'Add'} Timetable Entry</h3>
            <div>
              <label>Period</label>
              <input
                type="text"
                value={editData.period}
                onChange={(e) => setEditData({ ...editData, period: e.target.value })}
              />
            </div>
            <div>
              <label>Subject</label>
              <input
                type="text"
                value={editData.subject}
                onChange={(e) => setEditData({ ...editData, subject: e.target.value })}
              />
            </div>
            <div>
              <label>Staff</label>
              <input
                type="text"
                value={editData.staff}
                onChange={(e) => setEditData({ ...editData, staff: e.target.value })}
              />
            </div>
            <div className="popup-buttons">
              <button onClick={handleSubmit} className="submit-button">Submit</button>
              <button onClick={() => setShowPopup(false)} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;
