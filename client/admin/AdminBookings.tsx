import React from "react";
import AdminLayout from "./AdminLayout";

const bookings = [
  {
    id: 1,
    name: "Rahul Sharma",
    pooja: "Rudra Abhishek",
    date: "12 Oct",
    location: "Mahakal Mandir",
    status: "Pending",
  },
  {
    id: 2,
    name: "Amit Joshi",
    pooja: "Mahamrityunjay Jaap",
    date: "15 Oct",
    location: "Custom",
    status: "Confirmed",
  },
];

const AdminBookings = () => {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Bookings</h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3">Devotee</th>
              <th className="p-3">Pooja</th>
              <th className="p-3">Date</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.pooja}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3">{b.location}</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700">
                    {b.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-orange-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminBookings;