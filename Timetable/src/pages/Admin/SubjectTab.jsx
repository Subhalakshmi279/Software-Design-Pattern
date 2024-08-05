import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '@/assets/css/SubjectTab.css';

const SubjectTab = () => {
  const [subjects, setSubjects] = useState([]);
  const [currentSubject, setCurrentSubject] = useState({ courseCode: '', name: '', credits: 0, staffId: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/subjects')
      .then(response => setSubjects(response.data))
      .catch(error => console.error('Error fetching subjects:', error));
  }, []);

  const handleEdit = (subject) => {
    setCurrentSubject(subject);
    setIsEditing(true);
  };

  const handleDelete = (courseCode) => {
    axios.delete(`http://localhost:8080/subjects/${courseCode}`)
      .then(() => setSubjects(subjects.filter(subject => subject.courseCode !== courseCode)))
      .catch(error => console.error('Error deleting subject:', error));
  };

  const handleAdd = () => {
    setCurrentSubject({ courseCode: '', name: '', credits: 0, staffId: '' });
    setIsEditing(true);
  };

  const handleSave = () => {
    const { courseCode, staffId } = currentSubject;
    if (courseCode) {
      // Update existing subject
      axios.put(`http://localhost:8080/subjects/${courseCode}`, { ...currentSubject, staffId })
        .then(response => {
          setSubjects(subjects.map(subject => (subject.courseCode === courseCode ? response.data : subject)));
          setIsEditing(false);
        })
        .catch(error => console.error('Error updating subject:', error));
    } else {
      // Add new subject
      axios.post(`http://localhost:8080/subjects`, { ...currentSubject, staffId })
        .then(response => {
          setSubjects([...subjects, response.data]);
          setIsEditing(false);
        })
        .catch(error => console.error('Error adding subject:', error));
    }
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
          {subjects.map(subject => (
            <tr key={subject.courseCode}>
              <td>{subject.courseCode}</td>
              <td>{subject.name}</td>
              <td>{subject.credits}</td>
              <td>{subject.staffId || 'N/A'}</td>
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
              <button className="add-button" onClick={handleAdd}>Add New Subject</button>
            </td>
          </tr>
        </tfoot>
      </table>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>{currentSubject.courseCode ? 'Edit Subject' : 'Add Subject'}</h2>
            <label>
              Course Code:
              <input
                type="text"
                value={currentSubject.courseCode || ''}
                onChange={(e) => setCurrentSubject({ ...currentSubject, courseCode: e.target.value })}
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                value={currentSubject.name || ''}
                onChange={(e) => setCurrentSubject({ ...currentSubject, name: e.target.value })}
              />
            </label>
            <label>
              Credits:
              <input
                type="number"
                value={currentSubject.credits || ''}
                onChange={(e) => setCurrentSubject({ ...currentSubject, credits: parseInt(e.target.value, 10) })}
              />
            </label>
            <label>
              Staff ID:
              <input
                type="text"
                value={currentSubject.staffId || ''}
                onChange={(e) => setCurrentSubject({ ...currentSubject, staffId: e.target.value })}
              />
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectTab;
