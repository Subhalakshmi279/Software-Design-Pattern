import React, { useState } from "react";
import { FaEdit, FaTrash, FaCalendarAlt, FaFileExport } from "react-icons/fa";
import "@/assets/css/Timetable.css";

const initialData = [
  { id: 1, department: "CSE", class: "A", tutor: "Dr. Smith", timetable: "View" },
  { id: 2, department: "IT", class: "B", tutor: "Ms. Johnson", timetable: "View" },
  { id: 3, department: "EEE", class: "C", tutor: "Mr. Brown", timetable: "View" },
  { id: 4, department: "IOT", class: "A", tutor: "Dr. Green", timetable: "View" },
];

const Timetable = () => {
  const [timetableData, setTimetableData] = useState(initialData);
  const [showPopup, setShowPopup] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAdd = () => {
    setEditData({ department: "", class: "", tutor: "", timetable: "View" });
    setShowPopup(true);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    setTimetableData(timetableData.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    if (editData.id) {
      setTimetableData(
        timetableData.map((item) => (item.id === editData.id ? editData : item))
      );
    } else {
      setTimetableData([
        ...timetableData,
        { ...editData, id: timetableData.length + 1 },
      ]);
    }
    setShowPopup(false);
    setEditData(null);
  };

  const handleExport = () => {
    // Implement export functionality here
    console.log("Exporting data...");
  };

  return (
    <div className="t-container">
      <div className="timetable">
        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <h1 className="title text-2xl font-bold text-white">Class Table</h1>
          </div>
          <button
            onClick={handleExport}
            className="flex items-center text-blue-500 hover:text-blue-300"
          >
            <FaFileExport className="mr-1" />
            Export
          </button>
        </div>
        <table className="w-full border-collapse text-gray-100">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Department</th>
              <th className="py-2">Class</th>
              <th className="py-2">Tutor</th>
              <th className="py-2">Timetable</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((item) => (
              <tr key={item.id} className="border-b border-gray-600">
                <td className="py-3">{item.department}</td>
                <td className="py-3">{item.class}</td>
                <td className="py-3">{item.tutor}</td>
                <td className="py-3">
                  <div className="flex items-center justify-center">
                    <button className="flex items-center text-blue-500 hover:text-blue-300">
                      <FaCalendarAlt className="mr-1" />
                      {item.timetable}
                    </button>
                  </div>
                </td>
                <td className="actions">
                  <FaEdit
                    onClick={() => handleEdit(item)}
                    className="icon edit mr-2 cursor-pointer"
                  />
                  <FaTrash
                    onClick={() => handleDelete(item.id)}
                    className="icon delete cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAdd} className="add-button mt-4">
          Add
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{editData.id ? "Edit" : "Add"} Class Entry</h3>
            <div>
              <label>Department</label>
              <input
                type="text"
                value={editData.department}
                onChange={(e) =>
                  setEditData({ ...editData, department: e.target.value })
                }
              />
            </div>
            <div>
              <label>Class</label>
              <input
                type="text"
                value={editData.class}
                onChange={(e) =>
                  setEditData({ ...editData, class: e.target.value })
                }
              />
            </div>
            <div>
              <label>Tutor</label>
              <input
                type="text"
                value={editData.tutor}
                onChange={(e) =>
                  setEditData({ ...editData, tutor: e.target.value })
                }
              />
            </div>
            <div className="popup-buttons">
              <button onClick={handleSubmit} className="submit-button">
                Submit
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;
