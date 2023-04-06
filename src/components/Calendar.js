import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="fr"
        events={[
          { title: "event 1", date: "2023-04-01" },
          { title: "event 2", date: "2023-04-02" },
        ]}
      />
    </div>
  );
}

export default Calendar;
