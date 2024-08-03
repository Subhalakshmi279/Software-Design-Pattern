import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '@/assets/css/SubjectTab.css';

const SubjectTab = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, courseCode: 'CS101', name: 'Introduction to Programming', credits: 3 },
    { id: 2, courseCode: 'CS102', name: 'Data Structures', credits: 2 },
    { id: 3, courseCode: 'CS103', name: 'RDBMS', credits: 3 },
    { id: 4, courseCode: 'CS104', name: 'DAA', credits: 2 },
    { id: 5, courseCode: 'CS105', name: 'Python', credits: 3 },
  ]);

  const [currentSubject, setCurrentSubject] = useState({ id: null, courseCode: '', name: '', credits: 0 });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (subject) => {
    setCurrentSubject(subject);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
  };

  const handleAdd = () => {
    setCurrentSubject({ id: null, courseCode: '', name: '', credits: 0 });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (currentSubject.id) {
      setSubjects(subjects.map(subject => (subject.id === currentSubject.id ? currentSubject : subject)));
    } else {
      setSubjects([...subjects, { ...currentSubject, id: subjects.length + 1 }]);
    }
    setIsEditing(false);
  };

  return (
    <div className="subject-table-container">
      <table className="subject-table">
        <thead>
          <tr>
            <th colSpan="4" className="subject-table-title">Subject Table</th>
          </tr>
          <tr>
            <th>Course Code</th>
            <th>Subject</th>
            <th>Credits</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <tr key={subject.id}>
              <td>{subject.courseCode}</td>
              <td>{subject.name}</td>
              <td>{subject.credits}</td>
              <td className="actions">
                <div className="action-buttons">
                  <FaEdit className="action-icon" onClick={() => handleEdit(subject)} />
                  <FaTrash className="action-icon" onClick={() => handleDelete(subject.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="add-button-container">
              <button className="add-button" onClick={handleAdd}>Add New Subject</button>
            </td>
          </tr>
        </tfoot>
      </table>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>{currentSubject.id ? 'Edit Subject' : 'Add Subject'}</h2>
            <label>
              Course Code:
              <input
                type="text"
                value={currentSubject.courseCode}
                onChange={(e) => setCurrentSubject({ ...currentSubject, courseCode: e.target.value })}
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                value={currentSubject.name}
                onChange={(e) => setCurrentSubject({ ...currentSubject, name: e.target.value })}
              />
            </label>
            <label>
              Credits:
              <input
                type="number"
                value={currentSubject.credits}
                onChange={(e) => setCurrentSubject({ ...currentSubject, credits: parseInt(e.target.value) })}
              />
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

export default SubjectTab;
