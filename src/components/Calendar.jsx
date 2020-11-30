import React from "react";
import { useHistory } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";

// Students Calendar ID:	teknologkaren.se_cv8lkaj3fkr8f1mbjo6f6c45n4@group.calendar.google.com
// Companies Calendar ID:	teknologkaren.se_5obm6hbbk6pbu48lochpbr9370@group.calendar.google.com

export default function Calendar() {
	const history = useHistory();

	return (
		<FullCalendar
			defaultView="dayGridMonth"
			plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]}
			header={{
				left: "prev,next today",
				center: "title",
				right: "dayGridMonth,timeGridWeek,timeGridDay,listYear",
			}}
			views={{
				listDay: {
					buttonText: "list day",
				},
				listWeek: {
					buttonText: "list week",
				},
				listMonth: {
					buttonText: "list month",
				},
				listYear: {
					buttonText: "list",
					duration: { years: 2 },
				},
			}}
			googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDAR_API}
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
			eventClick={(calEvent, jsEvent, view, resourceObj) => {
				calEvent.jsEvent.preventDefault();
				const title = calEvent?.event?._def?.title;
				const description = calEvent?.event?._def?.extendedProps?.description;
				const location = calEvent?.event?._def?.extendedProps?.location;
				const begin = calEvent?.event?._instance?.range?.start;
				const end = calEvent?.event?._instance?.range?.end;
				const url = calEvent?.event?._def?.url;
				const id = calEvent?.event?._def?.publicId;
				history.push({
					pathname: "/event",
					state: { title, description, location, begin, end, url, id },
				});
			}}
		/>
	);
}
