import React from "react";
import { useTranslation } from "react-i18next";
import ImageContent from "../components/ImageContent";
import img1 from "../img/misc/rsz_massan-006.jpg";
import img2 from "../img/misc/rsz_massan-122.jpg";
import img3 from "../img/misc/rsz_massan-090.jpg";
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
				en: "Join LARV",
				sv: "Delta i LARV",
			},
			image: img1,
			imageAlt: "",
			content: {
				en:
					"Week 3, 2021, is LARV. A week full of lectures, competitions, the fair and much more! Read more under Fair in the menu above.",
				sv:
					"Vecka 3, 2021, är det LARV. En vecka fylld av föreläsningar, tävlingar, mässan och mycket mer! Läs mer under Mässan i menyn ovan.",
			},
			linkTo: "/fair",
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
		{
			title: {
				en: "Fair Guide for students",
				sv: "Mässguide för studenter",
			},
			image: img3,
			imageAlt: "",
			content: {
				en:
					"This year's fair is quite different than previous years. We have therefore made a full guide of how this fair works and what you can do to get the most out of LARV 2021.",
				sv:
					"Årets mässa är helt annorlunda än tidigare år. Vi har därför gjort en fullständig guide för hur denna mässa fungerar och vad du kan göra för att få ut det mesta av LARV 2021.",
			},
			linkTo: "/students/guide",
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
