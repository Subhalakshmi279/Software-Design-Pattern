import React, { useState } from "react";
import '@/assets/css/UserModal.css'; // Import the updated CSS

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      staffName: "",
      department: "CSE",
      assignedSubject: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.staffName && formState.department && formState.assignedSubject) {
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
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="staffName">Staff Name</label>
            <input
              name="staffName"
              onChange={handleChange}
              value={formState.staffName}
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="assignedSubject">Assigned Subject</label>
            <input
              name="assignedSubject"
              onChange={handleChange}
              value={formState.assignedSubject}
            />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="modal-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
