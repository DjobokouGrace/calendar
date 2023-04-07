import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/mock/events.json").then((res) => {
      let data = res.data.map((event, index) => {
        let end = new Date(event.dateEvent);
        end.setHours(end.getHours() + event.duration);

        function getColour(index) {
          if (index % 2 === 0) {
            return "red";
          } else if (index % 3 === 0) {
            return "green";
          } else if (index % 5 === 0) {
            return "purple";
          } else if (index % 7 === 0) {
            return "blue";
          }
        }

        return {
          id: event.id,
          title: event.name,
          date: event.dateEvent,
          end,
          backgroundColor: getColour(index),
          url: "/",
        };
      });
      setEvents(data);
    });
  }, []);

  function handleClick(info) {
    info.jsEvent.preventDefault();
    console.log("info", info);
    console.log("info 5555", info.event._def.sourceId);
  }

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locale="fr"
        events={events}
        eventClick={handleClick}
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
