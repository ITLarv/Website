import React from "react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
	const { t } = useTranslation();
	return (
		<div className="firstView">
			<h1>{t("GALLERY.HEADER")}</h1>
		</div>
	);
}
