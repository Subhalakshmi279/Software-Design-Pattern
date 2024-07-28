import React, { useState } from 'react';
import "@/assets/css/UserModal.css"; // Ensure to import the new CSS

export const StaffModal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      staff: "",
      description: "",
      status: "live",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.staff && formState.description && formState.status) {
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
            <label htmlFor="staff">Staff</label>
            <input name="staff" onChange={handleChange} value={formState.staff} />
          </div>
          <div className="user-form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="user-form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className="user-error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="user-modal-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className="user-modal-close-btn" onClick={closeModal}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};
