import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '@/assets/css/SubjectTab.css';

const SubjectTab = () => {
  const [subjects, setSubjects] = useState([
    { courseCode: '1', name: 'SDP', credits: '4', staffId: '20' },
    { courseCode: '2', name: 'DSA', credits: '4', staffId: '20' },
  ]);

  const [currentSubject, setCurrentSubject] = useState({
    courseCode: '',
    name: '',
    credits: '',
    staffId: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentSubject({ ...currentSubject, [name]: value });
  };

  const handleDelete = (courseCode) => {
    setSubjects(subjects.filter((subject) => subject.courseCode !== courseCode));
  };

  const handleSave = () => {
    const { courseCode } = currentSubject;

    if (isEditing) {
      // Update existing subject
      setSubjects(
        subjects.map((subject) =>
          subject.courseCode === courseCode ? currentSubject : subject
        )
      );
    } else {
      // Add new subject
      setSubjects([...subjects, currentSubject]);
    }

    // Reset form and close modal
    setIsEditing(false);
    setShowModal(false);
    setCurrentSubject({ courseCode: '', name: '', credits: '', staffId: '' });
  };

  const handleEdit = (subject) => {
    setIsEditing(true);
    setShowModal(true);
    setCurrentSubject(subject);
  };

  const handleAddNew = () => {
    setIsEditing(false);
    setShowModal(true);
    setCurrentSubject({ courseCode: '', name: '', credits: '', staffId: '' });
  };

  return (
    <div className="subject-table-container">
      <table className="subject-table">
        <thead>
          <tr>
            <th colSpan="5" className="subject-table-title">Subject Table</th>
          </tr>
          <tr>
            <th>Course Code</th>
            <th>Subject</th>
            <th>Credits</th>
            <th>Staff ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.courseCode}>
              <td>{subject.courseCode}</td>
              <td>{subject.name}</td>
              <td>{subject.credits}</td>
              <td>{subject.staffId}</td>
              <td className="actions">
                <div className="action-buttons">
                  <FaEdit className="action-icon" onClick={() => handleEdit(subject)} />
                  <FaTrash className="action-icon" onClick={() => handleDelete(subject.courseCode)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="add-button-container">
              <button className="add-button" onClick={handleAddNew}>Add New Subject</button>
            </td>
          </tr>
        </tfoot>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isEditing ? 'Edit Subject' : 'Add Subject'}</h2>
            <label>
              Course Code:
              <input
                type="text"
                name="courseCode"
                value={currentSubject.courseCode}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={currentSubject.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Credits:
              <input
                type="text"
                name="credits"
                value={currentSubject.credits}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Staff ID:
              <input
                type="text"
                name="staffId"
                value={currentSubject.staffId}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleSave}>{isEditing ? 'Update' : 'Add'}</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectTab;
