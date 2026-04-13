import { useEffect, useState } from "react";
import "./Bookings.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  // Dummy data (for now)
  useEffect(() => {
    setBookings([
      {
        id: 1,
        title: "Python Workshop",
        date: "20 April 2026",
        status: "Confirmed",
      },
      {
        id: 2,
        title: "AI/ML Bootcamp",
        date: "25 April 2026",
        status: "Pending",
      },
    ]);
  }, []);

  return (
    <div className="bookings-container">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet 😢</p>
      ) : (
        <div className="booking-list">
          {bookings.map((b) => (
            <div key={b.id} className="booking-card">
              <h3>{b.title}</h3>
              <p>Date: {b.date}</p>
              <p>Status: {b.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;