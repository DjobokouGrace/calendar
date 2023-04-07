import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/event.json").then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locale="fr"
        events={[
          { title: "event 1", date: "2023-04-01" },
          { title: "event 2", date: "2023-04-02" },
        ]}
        headerToolbar={{
          start: "dayGridMonth,timeGridWeek,timeGridDay listWeek",
          center: "title",
          end: "today prev,next",
        }}
      />
    </div>
  );
}

export default Calendar;
