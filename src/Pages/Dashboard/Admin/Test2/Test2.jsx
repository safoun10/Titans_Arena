import './Test2.css'
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
const Test2 = () => {
    const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

    return (
        <div  style={{
            background:
              "var(--layout-dark-landing, linear-gradient(142deg, rgba(27, 51, 81, 0.30) 19.63%, rgba(155, 97, 149, 0.30) 83.01%))",
              boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(30px)",
              border: "1px solid var(--outline-dark-update-layout, #FFF)",
            }} className="m-2 p-2  text-white">
       
  
        <div className="flex flex-row-reverse justify-between">
          {/* Calendar Sidebar */}
          <div className="w-1/3 bg-primary-400 p-4 rounded">
            <h2 className="text-xl font-semibold">Events</h2>
            <ul>
              {currentEvents.map((event) => (
                <li
                  key={event.id}
                  className="bg-greenAccent-500 my-2 p-2 rounded"
                >
                  <div className="font-semibold">{event.title}</div>
                  <div>
                    {/* Format date here */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Calendar */}
          <div className="w-2/3 ml-4">
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  date: "2022-09-14",
                },
                {
                  id: "5123",
                  title: "Timed event",
                  date: "2022-09-28",
                },
              ]}
            />
          </div>
        </div>
      </div>
    );
};

export default Test2;