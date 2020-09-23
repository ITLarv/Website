import React from "react";
import Calendar from "../components/Calendar.jsx";
import { useTranslation } from "react-i18next";

export default function CalendarPage() {
	const { t } = useTranslation();
	return (
		<>
			<h1>{t("GENERAL.CALENDAR")}</h1>
			<Calendar />
		</>
	);
}
