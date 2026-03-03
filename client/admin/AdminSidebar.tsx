import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, CalendarCheck, Users, ListChecks } from "lucide-react";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-6 border-b">
        <h1 className="font-cinzel text-xl font-bold text-orange-600">
          Purohitam Admin
        </h1>
      </div>

      <nav className="p-4 space-y-2 text-sm">
        <Link
          to="/admin"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-orange-50"
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>

        <Link
          to="/admin/bookings"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-orange-50"
        >
          <CalendarCheck className="w-4 h-4" />
          Bookings
        </Link>

        <Link
          to="/admin/priests"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-orange-50"
        >
          <Users className="w-4 h-4" />
          Priests
        </Link>

        <Link
          to="/admin/poojas"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-orange-50"
        >
          <ListChecks className="w-4 h-4" />
          Poojas
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;