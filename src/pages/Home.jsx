import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

// Calendar API-key:		AIzaSyArdTUb_RBS9qf-bBa3m98wAYMHuiuL6t8
// StudentsCalendar ID:		teknologkaren.se_cv8lkaj3fkr8f1mbjo6f6c45n4@group.calendar.google.com
// Companies Calendar ID:	teknologkaren.se_5obm6hbbk6pbu48lochpbr9370@group.calendar.google.com

export default function Home() {
	return (
		<>
			<h1>Hometime</h1>
			<FullCalendar
				defaultView="dayGridMonth"
				plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
				header={{
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
				}}
				googleCalendarApiKey="AIzaSyArdTUb_RBS9qf-bBa3m98wAYMHuiuL6t8"
				eventSources={[
					{
						googleCalendarId:
							"teknologkaren.se_cv8lkaj3fkr8f1mbjo6f6c45n4@group.calendar.google.com",
						className: "Students",
					},
					{
						googleCalendarId:
							"teknologkaren.se_5obm6hbbk6pbu48lochpbr9370@group.calendar.google.com",
						className: "Companies",
					},
				]}
				firstDay={1} // Start monday
				eventClick={function (calEvent, jsEvent, view, resourceObj) {
					calEvent.jsEvent.preventDefault();
					console.log({ calEvent });
					const title = calEvent?.event?._def?.title;
					const description = calEvent?.event?._def?.extendedProps?.description;
					const location = calEvent?.event?._def?.extendedProps?.location;
					const begin = calEvent?.event?._instance?.range?.start;
					const end = calEvent?.event?._instance?.range?.end;
					console.log({ title, description, location, begin, end });
				}}
			/>
		</>
	);
}
