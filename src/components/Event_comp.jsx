import React from 'react'

const Event_comp = () => {
  const users = [
    { id: 1, name: "Rahul Heer", email: "rahul@example.com", role: "Admin" },
    { id: 2, name: "Simran Kaur", email: "simran@example.com", role: "Editor" },
    { id: 3, name: "Amanpreet Singh", email: "aman@example.com", role: "Viewer" },
  ];

  return (
    <div className="p-6">
      <div className="overflow-x-auto rounded-lg shadow-lg">
  <table className="min-w-full bg-white border border-gray-300 border-collapse">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left border border-gray-300">ID</th>
              <th className="py-3 px-4 text-left border border-gray-300">Name</th>
              <th className="py-3 px-4 text-left border border-gray-300">Email</th>
              <th className="py-3 px-4 text-left border border-gray-300">Role</th>
              <th className="py-3 px-4 text-center border border-gray-300">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border border-gray-300">{user.id}</td>
                <td className="py-3 px-4 border border-gray-300">{user.name}</td>
                <td className="py-3 px-4 border border-gray-300">{user.email}</td>
                <td className="py-3 px-4 border border-gray-300">
                  <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-4 text-center border border-gray-300">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Event_comp
