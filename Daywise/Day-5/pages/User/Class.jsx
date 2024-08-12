import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Import a new icon

const Class = () => {
  const classes = [
    {
      department: "CSE",
      class: "A",
      tutor: "Dr. Smith",
      timetable: "View",
    },
    {
      department: "IT",
      class: "B",
      tutor: "Ms. Johnson",
      timetable: "View",
    },
    {
      department: "EEE",
      class: "C",
      tutor: "Mr. Brown",
      timetable: "View",
    },
    {
      department: "IOT",
      class: "A",
      tutor: "Dr. Green",
      timetable: "View",
    },
  ];

  return (
    <div className="w-3/4 mx-auto text-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-4">
        <h2 className="py-4 text-2xl font-bold text-gray-100 pb-10">
          Class Table
        </h2>
        <table className="w-full border-collapse text-gray-100">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Department</th>
              <th className="py-2">Class</th>
              <th className="py-2">Tutor</th>
              <th className="py-2">Timetable</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-3">{cls.department}</td>
                <td className="py-3">{cls.class}</td>
                <td className="py-3">{cls.tutor}</td>
                <td className="py-3">
                  <button className="flex items-center justify-center mx-auto text-blue-500 hover:text-blue-300">
                    <FaCalendarAlt className="mr-2" />
                    {cls.timetable}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Class;
