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
    <div className="m-2 p-2 border rounded-md text-white bg-slate-800 ">
      <div className="md:flex flex-row-reverse justify-between">
        {/* Calendar Sidebar */}
        <div className="md:w-1/3  bg-primary-400 p-4 rounded">
          <h2 className="text-xl font-semibold">Events</h2>
          <ul>
            {currentEvents.map((event) => (
              <li
                key={event.id}
                className="bg-greenAccent-500 my-2 p-2 rounded"
              >
                <div className="font-semibold">{event.title}</div>
                <div>{/* Format date here */}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Calendar */}
        <div className="md:w-2/3 ">
          <FullCalendar
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
              {
                id: "789",
                title: "Reserved Date 1",
                date: "2022-10-10",
              },
              {
                id: "456",
                title: "Reserved Date 2",
                date: "2022-10-15",
              },
              // Add more static events here if needed
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Test2;
