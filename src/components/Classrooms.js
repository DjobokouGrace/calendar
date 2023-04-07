import React from "react";
import { Link, Outlet } from "react-router-dom";

function Classrooms() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
      }}
    >
      {Array(10)
        .fill()
        .map(() => (
          <div
            className="room"
            style={{
              fontSize: "2em",
              border: "1px solid black",
              flex: "0 0 20%",
              borderRadius: "7px",
              padding: "20px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            <Link
              className="room__link"
              to="/home/calendar"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Salle Indien
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Classrooms;
