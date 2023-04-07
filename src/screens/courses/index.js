import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import { courses } from "../../data/parser";
function Courses() {
  return <div>
  <FullCalendar
    plugins={[dayGridPlugin, listPlugin, timeGridPlugin]}
    initialView="dayGridMonth"
    locale="fr"
    events={courses}
    headerToolbar={{
      start: "dayGridMonth,timeGridWeek,timeGridDay listWeek",
      center: "title",
      end: "today prev,next",
    }}
  />
</div>
}

export default Courses;
