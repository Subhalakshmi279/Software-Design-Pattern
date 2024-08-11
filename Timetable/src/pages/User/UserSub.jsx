import React from "react";

const UserSub = () => {
  const subjects = [
    {
      courseCode: "CS101",
      name: "Introduction to Computer Science",
      credits: 3,
      year: "I",
      dept: "CSE",
    },
    {
      courseCode: "IT202",
      name: "Database Management Systems",
      credits: 4,
      year: "II",
      dept: "IT",
    },
    {
      courseCode: "EEE303",
      name: "Circuit Theory",
      credits: 4,
      year: "III",
      dept: "EEE",
    },
    {
      courseCode: "IOT404",
      name: "Internet of Things",
      credits: 3,
      year: "III",
      dept: "IOT",
    },
  ];

  return (
    <div className="w-3/4 mx-auto text-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="py-4 text-2xl font-bold text-gray-100 pb-12">Subject Table</h2>
        <table className="w-full border-collapse text-gray-100">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Course Code</th>
              <th className="py-2">Title</th>
              <th className="py-2">Credits</th>
              <th className="py-2">Year</th>
              <th className="py-2">Dept</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.courseCode} className="border-b border-gray-600">
                <td className="py-3">{subject.courseCode}</td>
                <td className="py-3">{subject.name}</td>
                <td className="py-3">{subject.credits}</td>
                <td className="py-3">{subject.year}</td>
                <td className="py-3">{subject.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSub;
