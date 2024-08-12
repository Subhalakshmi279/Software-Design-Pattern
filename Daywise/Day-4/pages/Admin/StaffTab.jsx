import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '@/assets/css/StaffTab.css';

const StaffTab = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'John Doe', course: 'CS101' },
    { id: 2, name: 'Jane Smith', course: 'CS102' },
    { id: 3, name: 'Alice Johnson', course: 'CS103' },
    { id: 4, name: 'Bob Brown', course: 'CS104' },
    { id: 5, name: 'Eve Davis', course: 'CS105' },
  ]);

  const [currentStaff, setCurrentStaff] = useState({ id: null, name: '', course: '' });
  const [isEditing, setIsEditing] = useState(false);

  const courses = ['CS101', 'CS102', 'CS103', 'CS104', 'CS105'];

  const handleEdit = (staff) => {
    setCurrentStaff(staff);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setStaff(staff.filter(staff => staff.id !== id));
  };

  const handleAdd = () => {
    setCurrentStaff({ id: null, name: '', course: '' });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (currentStaff.id) {
      setStaff(staff.map(s => (s.id === currentStaff.id ? currentStaff : s)));
    } else {
      setStaff([...staff, { ...currentStaff, id: staff.length + 1 }]);
    }
    setIsEditing(false);
  };

  return (
    <div className="subject-table-container">
      <table className="subject-table">
        <thead>
          <tr>
            <th colSpan="4" className="subject-table-title">Staff Table</th>
          </tr>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map(staff => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.course}</td>
              <td className="actions">
                <div className="action-buttons">
                  <FaEdit className="action-icon" onClick={() => handleEdit(staff)} />
                  <FaTrash className="action-icon" onClick={() => handleDelete(staff.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="add-button-container">
              <button className="add-button" onClick={handleAdd}>Add New Staff</button>
            </td>
          </tr>
        </tfoot>
      </table>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>{currentStaff.id ? 'Edit Staff' : 'Add Staff'}</h2>
            <label>
              Name:
              <input
                type="text"
                value={currentStaff.name}
                onChange={(e) => setCurrentStaff({ ...currentStaff, name: e.target.value })}
              />
            </label>
            <label>
              Course:
              <select
                value={currentStaff.course}
                onChange={(e) => setCurrentStaff({ ...currentStaff, course: e.target.value })}
              >
                <option value="">Select Course</option>
                {courses.map(course => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </label>
            <div className="modal-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffTab;