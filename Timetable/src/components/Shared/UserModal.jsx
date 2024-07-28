import React, { useState } from "react";
import '@/assets/css/UserModal.css';

const UserModal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      period: "",
      staffName: "",
      department: "CSE",
      assignedSubject: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.period && formState.staffName && formState.department && formState.assignedSubject) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="user-modal-container"
      onClick={(e) => {
        if (e.target.className === "user-modal-container") closeModal();
      }}
    >
      <div className="user-modal">
        <form>
          <div className="user-form-group">
            <label htmlFor="period">Period</label>
            <input
              name="period"
              onChange={handleChange}
              value={formState.period}
            />
          </div>
          <div className="user-form-group">
            <label htmlFor="staffName">Staff Name</label>
            <input
              name="staffName"
              onChange={handleChange}
              value={formState.staffName}
            />
          </div>
          <div className="user-form-group">
            <label htmlFor="department">Department</label>
            <select
              name="department"
              onChange={handleChange}
              value={formState.department}
            >
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="IT">IT</option>
              <option value="EEE">EEE</option>
              <option value="CIVIL">CIVIL</option>
              <option value="MECH">MECH</option>
            </select>
          </div>
          <div className="user-form-group">
            <label htmlFor="assignedSubject">Assigned Subject</label>
            <input
              name="assignedSubject"
              onChange={handleChange}
              value={formState.assignedSubject}
            />
          </div>
          {errors && <div className="user-error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="user-modal-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <button onClick={closeModal} className="user-modal-close-btn">Close</button>
      </div>
    </div>
  );
};

export default UserModal;
