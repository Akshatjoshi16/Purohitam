import React from "react";
import AdminLayout from "./AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Bookings</p>
          <p className="text-3xl font-bold text-orange-600">24</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-3xl font-bold text-yellow-600">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-3xl font-bold text-green-600">16</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;