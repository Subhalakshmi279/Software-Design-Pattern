import React, { useState } from "react";
import '@/assets/css/SubjectModal.css';

const SubjectModal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      subjectName: "",
      subjectCode: "",
      department: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.subjectName && formState.subjectCode && formState.department) {
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
      className="subject-modal-container"
      onClick={(e) => {
        if (e.target.className === "subject-modal-container") closeModal();
      }}
    >
      <div className="subject-modal">
        <form>
          <div className="subject-form-group">
            <label htmlFor="subjectName">Subject Name</label>
            <input
              name="subjectName"
              onChange={handleChange}
              value={formState.subjectName}
            />
          </div>
          <div className="subject-form-group">
            <label htmlFor="subjectCode">Subject Code</label>
            <input
              name="subjectCode"
              onChange={handleChange}
              value={formState.subjectCode}
            />
          </div>
          <div className="subject-form-group">
            <label htmlFor="department">Department</label>
            <input
              name="department"
              onChange={handleChange}
              value={formState.department}
            />
          </div>
          {errors && (
            <div className="subject-error">{`Please include: ${errors}`}</div>
          )}
          <button
            type="submit"
            className="subject-modal-submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubjectModal;
