import React from "react";
import { NavLink } from "react-router-dom";
import { PGApplication } from "../config";

export default function FinalApplication() {
	const ApplicationOpen = PGApplication().open;
	return (
		<>
			<h1>Project Group (PG)</h1>
			<p>
				As part of the project group you are given full responsibility for one
				area of the project and is tasked with its planning and execution. You
				become part of a tightly intertwined group whom you must be able to work
				and communicate with for the project to move forward. There are 13
				different positions available. One of them is head of external
				communications, which is tasked with the HR of Employer Relations to
				LARV and their communication. Another example is the position as head of
				the career fair. This person is responsible for planning and creating
				the fair. More information regarding specific positions and their tasks
				can be found below.
			</p>
			<p>
				You will also be tasked with leading a number of coordinators and, in
				most cases, volunteers. This is a great opportunity to test and develop
				your leadership skills. As part of PG you will receive the most personal
				development that LARV has to offer and truly be able to grow as a
				person. The members of PG are also given the opportunity to travel
				outside of Luleå to meet and exchange experiences with representatives
				from other fairs.{" "}
			</p>
			<p>
				The workload and time investment varies greatly between the different
				positions in PG and are hard to estimate. You are generally expected to
				put in at least as much time as a coordinator. You can send an email to
				rekrytering@larv.org or projektledare@larv.org regarding any questions
				you might have.
			</p>
			{ApplicationOpen && (
				<NavLink className="button" to="/involved/pg/application">
					Apply for PG here!
				</NavLink>
			)}

			<h3>PG</h3>
			<div className="dropdown-content">
				<ul>
					<li>Deputy project manager</li>
					<li>Head of Banquet</li>
					<li>Head of Sponsorship</li>
					<li>Head of Events</li>
					<li>Head of Career fair</li>
					<li>Head of IT</li>
					<li>Head of Logistics</li>
					<li>Head of Lounge</li>
					<li>Head of PR</li>
					<li>Head of Employer Relations</li>
					<li>Head of HR</li>
					<li>Head of Services</li>
					<li>Head of Graphics</li>
				</ul>
			</div>

			<h3>Deputy project manager</h3>
			<p>
				Vice projektledare arbetar nära projektledaren med att leda och
				koordinera det löpande arbetet i projektet. Vice projektledare förväntas
				ha lika bra insyn i projektets helhet som projektledaren och får därmed
				ett stort ansvar. Arbetsuppgifter är väldigt flexibla och
				situationsanpassade vilket kräver initiativförmåga och lyhördhet.
				Arbetsuppgifter är allt från att planera större workshops till att följa
				upp det dagliga arbetet med insyn i allas processer.
			</p>
			<h3>Head of Banquet</h3>
			<p>
				Bankettansvarig anordnar LARV-banketten, en av årets finaste sittningar
				på Luleå tekniska universitet samt Teknologkårens största årliga
				sittning. Banketten är en fin middag för mässans utställare och
				funktionärer. Dessutom ansvarar bankettansvarig över mingelkvällen dagen
				före själva mässdagen och för lunchen under mässdagen. I arbetet ingår
				det bland annat att planera underhållning, dekor, mat och dryck samt att
				leda koordinatorer och värdar i deras arbete under två intensiva dagar
				då du samordnar ovannämnda evenemang.
			</p>
			<h3>Head of Sponsorship</h3>
			<p>
				Som marknadsföringsansvarig så ansvarar du för att marknadsföra LARV och
				kommunicera med studenterna på LTU. I arbetsuppgifterna ingår det att
				kontinuerligt uppdatera de sociala medierna och marknadsföra det arbete
				som projektgruppen gör samt de evenemang som planeras. Din kreativitet
				och vilja att göra LARV känt på campus kommer att vara avgörande. Det är
				endast din fantasi som sätter gränserna. Du bör som person vara
				utåtriktad och tycka om att kommunicera på olika sätt.
			</p>
			<h3>Head of Events</h3>
			<p>
				Eventansvarig har huvudansvaret för alla event under Prep-week och LARV
				bortsett från Banketten, mingelkvällen och mässan. Du har möjligheten
				att göra något extra i form av CV-granskningar, företagspresentationer,
				gästföreläsare, paneldebatter, fotograferingar samt andra PR- och
				mingelevent. Allt planeras i studenternas intresse att skapa mervärde
				kopplat till näringslivet under deras studietid. Arbetsuppgifterna
				innebär till stor del planerandet av dessa event, komma på exakt vad man
				vill åstadkomma samt ledning av eventgruppen.Det är endast din fantasi
				som sätter gränserna så använd din kreativitet och ta chansen att göra
				årets LARV mer givande än någonsin.
			</p>
			<h3>Head of Career Fair</h3>
			<p>
				Mässbyggnadsansvarig har huvudansvaret för mässområdet, vilket innebär
				allt från monterplacering till mattläggning. Du ansvarar även för
				säkerheten, byggandet och rivningen av mässan. Det är till stor del
				mässbyggnadsansvariges arbete som studenterna ser när de besöker
				mässområdet under mässdagen och det är viktigt att mässområdet är
				attraktivt för både besökare och utställare. Till din hjälp har du ett
				antal koordinatorer som du leder och samordnar under dagarna kring
				mässan.
			</p>
			<h3>Head of IT</h3>
			<p>
				IT- ansvarig ansvarar för allt IT-mässigt inom LARV. Detta innefattar
				att förvalta och utveckla vår hemsida och vara med och påverka
				utvecklingen av våra externa system. IT-ansvarig ansvarar även för hur
				utställande företag presenteras genom en webbkatalog med söksystem inför
				mässan på ett användarvänligt och professionellt sätt, då detta är en
				viktig del i marknadsföringen. Som ansvarig för helheten får IT-ansvarig
				agera stöd och support till många funktioner och problemställningar.
				Denna post kräver viss förkunskap inom XHTML, objektorienterad PHP och
				MySQL.
			</p>
			<h3>Head of Logistics</h3>
			<p>
				Logistikansvarig har huvudansvaret för alla godssändningar i samband med
				mässan. Arbetet innebär att hitta en speditör att samarbeta med,
				beställa eventinventarier, planera en organisering kring lagerhållning
				och godshantering under mässveckan samt leda och samordna koordinatorer
				i deras arbete. Du kommer att få användning av din fyndighet och bör ha
				ett sinne för att snabbt komma fram till smarta innovativa lösningar
				samt ha en god organisationsförmåga.
			</p>
			<h3>Head of Lounge</h3>
			<p>
				Loungeansvarig har huvudansvar för loungerna och lunchen under
				mässdagen. Du kommer att fixa lounger till både utställande företag och
				till besökare så det är bara din fantasi som sitter till stopp för vad
				alla kommer komma ihåg från loungen. Sedan är det också loungeansvariges
				ansvar att se till att alla företag och funktionärer får lunch under
				mässdagen.
			</p>
			<h3>Head of PR</h3>
			<p>
				Som marknadsföringsansvarig så ansvarar du för att marknadsföra LARV och
				kommunicera med studenterna på LTU. I arbetsuppgifterna ingår det att
				kontinuerligt uppdatera de sociala medierna och marknadsföra det arbete
				som projektgruppen gör samt de evenemang som planeras. Din kreativitet
				och vilja att göra LARV känt på campus kommer att vara avgörande. Det är
				endast din fantasi som sätter gränserna. Du bör som person vara
				utåtriktad och tycka om att kommunicera på olika sätt.
			</p>
			<h3>Head of Employer Relations</h3>
			<p>
				Företagsansvariga har huvudansvaret för att rekrytera företag till LARV
				2020 och kontinuerligt övervaka deras anmälan. Man jobbar också med att
				förvalta tidigare relationer och stärka LARV som varumärke utåt sett.
				Arbetet innefattar att kontakta företag, bjuda in dem till mässan samt
				hjälpa företagen vid anmälningsproblem i systemet Jexpo. Man ansvarar
				också för att leda sina koordinatorer och samordna den största gruppen
				värdar inom LARV i deras arbete.
			</p>
			<h3>Head of HR</h3>
			<p>
				Rekryteringsansvarig har huvudansvaret för alla företagsvärdar och
				samordningen inför rekryteringen av alla koordinatorer och funktionärer
				som arbetar under LARV. Arbetet innebär planering av marknadsföringen
				inför rekryteringen av funktionärer och koordinatorer tillsammans med
				marknadsföringsansvarig och grafiker samt matchning av företagsvärdar
				och företag. Följt av detta ansvarar man även för stormöten med över 180
				engagerade studenter och att hålla arbetsintervjuer. Är du en person som
				har en förmåga att engagera folk och är bra med människor är denna post
				för dig.
			</p>
			<h3>Head of Services</h3>
			<p>
				Posten som serviceansvarig innebär att du fungerar som spindeln i nätet.
				Ansvarsområdena är receptionerna under mässdagen, personliga samtalen
				och transportverksamheten. Du ser till att företagen får ett gott
				bemötande när de anländer till LARV och du bör känna dig bekväm med att
				ha kontakt med företag både via mejl och telefon. Till din hjälp så har
				du värdar och koordinatorer vilka du ska leda och samordna i deras
				arbete.
			</p>
			<h3>Head of Graphics</h3>
			<p>
				I rollen som grafiskt ansvarig kommer du utifrån den grafiska profilen
				arbeta för att skapa alla trycksaker som behöver en grafisk design. Allt
				du skapar kommer bli LARVs bild utåt mot både företag och studenter och
				således kommer du tillsammans med marknadsföringsansvarig ansvara för
				LARVs varumärke. Arbetsuppgifter innebär att ta till vara på projektets
				behov genom det visuella, att utforma tryck- och digitalt material.
				Grafiskt ansvarig i LARV ansvarar även för fotografering, hur det
				organiseras men också inköp av profilkläder och profilprodukter.
			</p>

			{ApplicationOpen && (
				<NavLink className="button" to="/involved/pg/application">
					Apply for PG here!
				</NavLink>
			)}
		</>
	);
}
