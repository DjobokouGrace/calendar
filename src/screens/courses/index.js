import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";

function Courses() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get("/mock/events.json").then((res) => {
        let data = res.data.map((event, index) => {
          let end = new Date(event.dateEvent);
          end.setHours(end.getHours() + event.duration);
  
          return {
            id: event.id,
            title: event.name,
            date: event.dateEvent,
            end,
            backgroundColor: "purple",
            url: "/",
            type: event.typeEvent
          };
        });
        let data_filter = data.filter((i)=> {
            return i.type === "cours"
        })
        console.log(data_filter)
        setEvents(data_filter);
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

export default Courses;
