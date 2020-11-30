import React from "react";
import { Link } from "react-router-dom";

function Covid19() {
	return (
		<div className="covid">
			<h1>Covid-19</h1>
			<h2>Hur LARV 2021 arbetar</h2>
			<p>
				Projektgruppen för LARV 2021 träffas varje vecka och följer alltid upp nya
				rekommendationer från Folkhälsomyndigheten, regionen och regering. Vi
				omvärldsbevakar aktivt och arbetar för att skapa de bästa möjliga förutsättningarna
				vi kan efter både ljusa och mörka prognoser. Projektgruppen består av 11 kreativa
				människor och en mängd koordinatorer till hjälp som regelbundet håller workshops,
				spånar på idéer och kreativa lösningar. Några av dessa kommer antagligen inte kunna
				genomföras till följd av strängare rekommendationer än när vi startade, andra hittar
				ni nedan. Men vad ni kan vara säkra på är att vi arbetar för att skapa så mycket
				värde för både företag och studenter vi kan under rådande omständigheter, och vi
				svarar mer än gärna på frågor om hur vi arbetar för att möta just era behov, oavsett
				om ni representerar ett företag eller är någon av Luleå tekniska universitets 15 000
				studenter.
			</p>
			<h2>Digital mässa</h2>
			<p>
				Precis som vanligt startar mässan klockan 09:00 och pågår fram till och med klockan
				16:00 och den äger rum den 20:e januari 2021. Mellan dessa klockslag kommer det
				finnas en mängd studenter och företag som vill träffas och knyta kontakter. Den enda
				skillnaden är att det i år kommer ske digitalt istället för fysiskt. Det kommer att
				finnas möjlighet att chatta mellan studenter och företag, men också möjlighet att
				prata ansikte mot ansikte med hjälp av videochatt.
			</p>
			<p>
				Studenter som studerar program av teknisk fakultet kommer ha en schemabrytning
				inlagd under hela dagen. Detta för att försäkra att det inte finns några
				undervisningstillfällen som kan komma ivägen för deras deltagande och chans att
				träffa alla utställare!
			</p>
			<h2>Plattform</h2>
			<p>
				LARV har utvärderat en mängd olika lösningar och likt många andra mässor landat i
				att{" "}
				<a href="https://graduateland.com" target="_blank" rel="noopener noreferrer">
					Graduateland
				</a>{" "}
				kan erbjuda den lösningen som skapar bäst värde för alla LARV:s besökare och
				deltagare. Det är en lösning som många företag redan känner till och som fokuserar
				på kommunikation framför buzzwords och omogen "3D"-teknik. Att majoriteten av de
				övriga universitetsmässorna valt samma lösning innebär dessutom att företag som
				deltar på flera mässor sparar mycket tid då de slipper registrera sig på olika
				plattformar.
			</p>
			<h3>Hur fungerar plattformen?</h3>
			<p>
				Vi arbetar just nu att ta fram guider som är lätta att följa för både deltagande
				företag och besökande studenter.
			</p>
			<h3>Digital mässplattform</h3>
			<p>
				<Link to="/fair">Här</Link> har vi samlat informationen rörande mässplattformen.
				Bland annat vilka fördelar som finns med en digital mässa jämfört med en klassiskt
				fysisk och hur vi arbetar med utmaningarna som en digital plattform för med sig. Vad
				som är bra att tänka på inför, under, och efter mässan.
			</p>
			{/* Knapp här istället kanske? */}
			<h2>Events</h2>
			<h3>Föreläsningar</h3>
			<p>
				I år satsar vi mer på föreläsningar än någonsin tidigare. Förutom föreläsningar
				under själva mässdagen satsar vi också på att fylla hela torsdagen med kortare
				presentationer från företag som får en unik möjlighet att presentera sig själva och
				sitt arbete. Har ni en spännande teknik, intressant lösning, eller unik kompetens ni
				gärna pratar om i 20-30 minuter? Hör av er via mail till{" "}
				<a href="mailto:event@larv.org">event@larv.org</a>.
			</p>
			<h3>Paneler</h3>
			<p>
				Förutom klassiska föreläsningar tänker vi också interaktiva paneler där
				representanter från företag ges möjlighet att diskutera ämnen. Dessa ämnen kan röra
				både specifika branscher, men också övergripande utmaningar. Har du som student
				eller företag någonting särskilt du önskar se, eller vill delta i. Tveka inte att
				kontakta <a href="mailto:event@larv.org">event@larv.org</a>.
			</p>
			<h3>LARV-bil</h3>
			<p>
				Det studenter älskar mest med arbetsmarknadsmässor, förutom möjligheten till
				arbetstillfällen och att nätverka är såklart att ta del av alla företags roliga
				giveaways, merchandise, och sponsorers testprodukter. I folkmun kallat “swag”. Detta
				är såklart en utmaning under en digital mässa där vi tar ansvar och avråder folk
				ifrån att samlas på ett och samma ställe. Därför har vi i år ett koncept kallat
				LARV-bil som kör ut goodie-bags till studenter som anmäler intresse. Dessa
				goodiebags är tänkta att innehålla just “swag” från företag och sponsorer. Samtliga
				goodiebags hanteras av fåtal personer efter noga tvättning av handsprit (och
				självklart regelbunden tvål och vatten när det finns tillgängligt).
			</p>
			<p>
				Har ni någonting fysiskt ni vill att studenterna ska ta del av? Kontakta{" "}
				<a href="mailto:anmalan@larv.org">anmalan@larv.org</a> så löser vi det!
			</p>
			<h3>Övrigt?</h3>
			<p>Har ni andra idéer på events tar vi självklart mer än gärna emot dessa!</p>
		</div>
	);
}

export default Covid19;
