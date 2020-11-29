import React from "react";
import { useTranslation } from "react-i18next";
import ImageContent from "../components/ImageContent";
import img1 from "../img/misc/rsz_massan-006.jpg";
import img2 from "../img/misc/rsz_massan-122.jpg";
import covid from "../img/misc/stop-covid.png";

export default function News() {
	const news = [
		{
			title: {
				en: "LARV and Covid-19",
				sv: "LARV och Covid-19",
			},
			image: covid,
			imageAlt: "",
			content: {
				en:
					"Read more about how Covid-19 affects LARV 2021 and how we work to create a career fair that creates value for both exhibitors and students",
				sv:
					"Läs mer om hur Covid-19 påverkar LARV 2021 och hur vi arbetar för att ändå genomföra en mässa som skapar värde åt både utställare och studenter",
			},
			linkTo: "/covid",
		},
		{
			title: {
				en: "Join LARV Prep-Week",
				sv: "Delta i LARV Prep-Week",
			},
			image: img1,
			imageAlt: "",
			content: {
				en:
					"Week 45 is LARV Prep-week. A week full of lectures, competitions, a LARV pub and much more! Read more under Prep-Week in the menu above.",
				sv:
					"Vecka 45 är det LARV Prep-week. En vecka fylld av föreläsningar, tävlingar, en LARV-pub och mycket mer! Läs mer under Prep-Week i menyn ovan.",
			},
		},
		{
			title: {
				en: "Website during construction",
				sv: "Hemsidan är under uppbyggnad",
			},
			image: img2,
			imageAlt: "",
			content: {
				en:
					"We are developing the website as fast as we can, but we apologize that not everything is completely done. If you discover any bugs or want to leave feedback, we are more than happy to receive this via email to it@larv.org",
				sv:
					"Vi håller på att utveckla hemsidan så fort vi bara kan, men ber om ursäkt att allting inte är helt finslipat. Upptäcker du några buggar eller vill lämna feedback tar vi mer än gärna emot detta via mail till it@larv.org",
			},
		},
	];

	const { t } = useTranslation();
	return (
		<>
			<h1>{t("GENERAL.NEWS")}</h1>
			<div className="NewsFlow">
				{news.map((newsItem) => (
					<ImageContent
						key={newsItem.title.en}
						title={newsItem.title}
						content={newsItem.content}
						image={newsItem.image}
						imageAlt={newsItem.imageAlt}
						linkTo={newsItem.linkTo}
					/>
				))}
			</div>
		</>
	);
}
