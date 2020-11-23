import React from "react";
import { useTranslation } from "react-i18next";
import ImageContent from "../components/ImageContent";
import img1 from "../img/misc/rsz_massan-006.jpg";
import img2 from "../img/misc/rsz_massan-122.jpg";

export default function News() {
	const news = [
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
						key={newsItem.title}
						title={newsItem.title}
						content={newsItem.content}
						image={newsItem.image}
						imageAlt={newsItem.imageAlt}
					/>
				))}
			</div>
		</>
	);
}
