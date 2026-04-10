import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    fetch(`http://localhost:8080/api/bookings/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Pooja</th>
            <th className="p-2">Date</th>
            <th className="p-2">Location</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b: any) => (
            <tr key={b.id}>
              <td className="p-2">{b.pooja}</td>
              <td className="p-2">{b.date}</td>
              <td className="p-2">{b.location}</td>
              <td className="p-2">{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;