# Hoofdanalyse: oorzaken, rangschikking en toetsbaarheid

> **Eigenaar van dit feit:** de geordende oorzaakanalyse van de schorsing van @KarelTest.
> **Status:** levend document. Laatst herzien 3 oktober 2026.
> **Relatie tot de andere documenten:** dit bestand is de **canonieke bron voor de analyse**. Het **oordeel van Karel zelf** — wat hij vindt van de sanctie, de ontbrekende waarschuwing en het beroepsproces — staat apart in [`0-INTERPRETATIE-Karel-eigen-oordeel.md`](0-INTERPRETATIE-Karel-eigen-oordeel.md) en is een **mening, geen bevinding**. De twee worden nooit samengevoegd. `1-PossibleFaults_by.me.md` (beide mappen), `AI_ANALYSE_SYNTHESE.md`, `CONCEPTEN_EN_NOTITIES_SYNTHESE.md` en `ANALYSE-JULES.md` zijn ruw materiaal of syntheses van AI-analyses; waar zij een oorzaak noemen, is de rangschikking en toetsbaarheid hier leidend. De samenvatting in `INFO/karel/YTT/YouTube_Schorsing_Dossier_Belangrijkste_Punten.md` §3 verwijst naar dit bestand.

---

## 0. De kern van deze analyse: oorzaak ≠ mechanisme

De eerdere opsomming van vermoedelijke oorzaken vermengt twee verschillende soorten uitspraken. Dat is de belangrijkste reden waarom die lijst nooit tot een beslissing leidde:

| Soort | Wat het is | Voorbeelden |
|---|---|---|
| **Oorzaak** (signaal) | Het waarneembare gegeven dat een vlag activeerde | merknaam, zichtbaarheid, commentaar, IP-reputatie, gehackt account |
| **Mechanisme** (versterker) | De manier waarop een signaal tot een *kanaal*-ban wordt omgezet | de spam-classifier, de "high-confidence"-drempel, de appeal-automatisering |

**"Slechte AI-moderatie" is geen oorzaak die tegenover de andere oorzaken staat — het is de versterker die élke oorzaak kan hebben geleverd.** Er zijn dus geen drie kandidaten ("hack / kwaliteit / AI-moderatie") maar: *één of meer oorzaken, plus een mechanisme dat uit een signaal een permanente kanaalban maakte zonder waarschuwing.*

Dat onderscheid heeft twee praktische gevolgen:

1. **Het maakt "slechte AI-moderatie" onbevraagbaar als verklaring.** Wie het als verklaring aanvoert, kan elk signaal noemen. Het is de aantrekkingskracht én de zwakte ervan.
2. **Het verschuift de bewijslast.** Omdat het mechanisme vaststaat dat het systeem een kanaalban zonder feitelijke grondslag kan afgeven, is de *procedurale* tekortkoming (geen feiten in de motivering) het eigenlijke probleem — niet de vraag welk signaal vuurde.

---

## 1. De vaste feiten (het frame)

Deze zijn niet hypotheses maar vastgesteld uit de eigen TakeOut en de correspondentie:

| Factum | Bron |
|---|---|
| Kanaal-ID | `UCETh_r8bn3OY09WLPnnANQA` — titel "Karel Test", zichtbaarheid Public |
| Verbanningsmail | **15 augustus 2025, 13:23** — "ernstige of herhaalde schendingen inzake spam, misleidende praktijken en scams" |
| **Geen** specifieke video, commentaar of gedrag genoemd | idem |
| **Eerste beroep afgewezen 16 augustus 2025, 03:21** (~14 uur later), met de formulering *"We reviewed your channel carefully, and have confirmed that it violates…"* — **zonder genoemde beoordelaar** | `1-timeline/TIMELINE.md` |
| **Tweede beroep afgewezen 16 augustus 10:11** — *"there has recently been an appeal"* | idem |
| **12 augustus 2025, 13:11 UTC** — eigen commentaar op eigen kanaal, video `yjEJ7PWXVcA`: *"you're killing it, Jules! i gotta say, you've grown on me... your content just gets better and better... good going"* | `3-counter-evidence/3.1-TakeOut-2025.08.16/comments/comments.csv` |
| Kanaal bestond pas sinds **juni 2025**; 3 video's; 0 abonnees; geen kijkduur, geen likes, geen comments | `2-YouTube-Policy/…/1-PossibleFaults_by.me.md`, TakeOut |
| Meldingsdag deepfake-ad (De Croo) — **augustus 2025**, YouTube antwoordde *"no problem at all"* | `1-timeline/2025.08.a-report-malicious-advertisement/incident_report.md` |
| Tweede kanaal "Karel Gerard Robert" (sept 2025) beëindigd wegens **omzeilingsbeleid** | dossier §2 |
| 3 september 2025, 09:47 | **Legal Support Team** antwoordt met *"enkel een standaardzin en een link naar de algemene helppagina over het aanvechten van een schorsing"* — precies het formulier dat al tweemaal was gebruikt. Om **20:22** volgt exact dezelfde standaard-afwijzingsmail als na het eerste beroep | `1-timeline/TIMELINE.md` |
| **YouTube heeft nooit één specifieke beleidsbepaling genoemd** — ook niet toen Karel er zelf één opperde (5/9/2025) | zie de correctie hieronder |

⚠️ **Correctie op een onjuistheid die in analyses circulereert, maar niet in het brondossier staat.** De formulering *"YouTube waarschuwde Karel op 9 augustus 2025 voor 'pogingen om kijkers schadelijke software te laten installeren'"* is **niet gebeurd** en komt in de bronnen niet voor. Zij is ontstaan door verkeerd lezen van het bestand `1-timeline/2025.09.05 To_ legal+ (Trying to get viewers to install harmful software…).md`: dat is een mail **van Karel aan** YouTube Legal Support, gedateerd **5 september 2025** — drie weken *na* de ban — en de beleidsformulering is daarin zijn **eigen gok** over welke policy-sectie van toepassing zou kunnen zijn. **YouTube heeft die hypothese nooit bevestigd, noch ontkend, noch zelf een beleidsbepaling genoemd.**

⚠️ **Waarom dit hier toch een correctie verdient, ondanks dat het niet in de bronnen staat:** het is een *aantrekkelijke* onjuistheid. Ze levert een verhalend, moreel sterk argument op ("ze waarschuwden mij en negeerden hun eigen waarschuwing") dat in het dossier nergens gedekt is. Het risico is dat iemand het later overneemt omdat het zo goed klinkt, en het in een brief aan een toezichthouder of de rechter gebruikt waar het niet kan worden onderbouwd. Vervang het door het feit dat wél gedekt is en dat hetzelfde doel bereikt: **YouTube heeft nooit een beleidsbepaling genoemd, en Karel's eigen hypothese daarover nooit bevestigd** — zie §3. Dat is een waarneembare tekortkoming onder DSA Art. 17, en vraagt geen interpretatie.

---

## 1b. Nieuw feit (3 oktober 2026): zeven gedocumenteerde beroepstickets

Bij het doorzoeken van de mailbox voor de security-test bleken **zeven tickets** te bestaan, alle in het label `YouTube/Termination`, alle met exact dezelfde geautomatiseerde tekst:

> *"Thank you for contacting us about restoring access to your Google Account. Google will review your appeal as soon as possible."*

| Ticket | Datum |
|---|---|
| `[5-4366000038890]` | 16 augustus 2025 — twee dagen na de sanctie |
| `[8-4263000039332]` | 3 september 2025 |
| `[1-1919000040046]` | 5 september 2025 |
| `[2-7272000039427]` | 8 september 2025 |
| `[8-6259000039717]` | 8 september 2025 |
| `[9-4255000039432]` | 9 september 2025 |
| `[7-1518000038835]` | 24 september 2025 |

### ⚠️ Lees de formulering niet als een claim

**Deze zeven tickets gaan over het YouTube-kanaal, niet over toegang tot het Google Account als geheel.** YouTube is eigendom van Google, en Googles formulier- en ticketsysteem gebruikt voor elk verzoek in deze categorie de standaardformule *"restoring access to your Google Account"*. Die zin is **de template van het systeem, niet de omschrijving van wat Karel heeft aangevraagd.** Het zijn vermoedelijk de automatische bevestigingen die volgden op het invullen van het online-beroepsformulier.

**Waarschuwing voor de toekomst, expliciet:** MACCHA had uit die boilerplate eerst afgeleid dat het om toegang tot het hele Google Account ging — e-mail, Drive, Cloud, smartBE — en dat bijgevolg in een eerste versie van dit document als "nieuw, ongedocumenteerd feit" opgenomen. **Die gevolgtrekking was fout** en is verwijderd. De regel is: *de tekst van een geautomatiseerd systeem beschrijft het systeem, niet de zaak.* Hetzelfde mechanisme verklaart waarschijnlijk mede waarom YouTube in de schorsingsmail een "beleid" noemde zonder te zeggen welke — een gecategoriseerde automatische tekst is geen inhoudelijke grondslag.

### Wat deze tickets wél zijn: het tastbare bewijs van de beroepslus

Waar de oudere dossierdocumenten de "kafkaëske lus" beschrijven, maar zonder sporen, zijn dit **zeven concrete ticket-ID's over zes weken, elk met exact dezelfde niet-identificerende automatische bevestiging, en geen ervan met een inhoudelijke uitkomst.** Dat is:

- een controleerbaar artefact voor de DSA Art. 20-vraag of er een mens van onafhankelijke beoordelaar bij de beslissingen betrokken was;
- een antwoord op de vraag hoeveel beroepsrondes er nu werkelijk zijn geweest (de tijdlijn noemt er drie, plus escalaties);
- iets dat je aan een toezichthouder kunt overhandigen zonder interpretatie: zeven nummers, zeven keer hetzelfde antwoord, nul uitkomsten.

**→ Nog te verifiëren:** de tickets bevatten de tekst die Karel zelf in het formulier intypte. Dat is de enige manier om vast te leggen wat er per ronde precies is ingediend — de bron voor de "herhaalde schorsing"-claim.

**Nevenbevinding die het procedureargument versterkt.** De mail *"Review the update on your appeal status"* (16/8) omschrijft zichzelf als *"this **mandatory email service announcement** to update you about important changes to your YouTube channel or account"*. YouTube communiceert dus over beroepsuitkomsten via geautomatiseerde massamail — een tastbaar detail bij de Art. 20-vraag.

---

Elke hypothese krijgt vier velden: **wat het verklaart**, **wat het niet verklaart**, of het **toetsbaar** is, en de **status**.

### O1 — Kanaalprofiel als classifier-prior *(nieuw in deze analyse; niet in eerdere documenten)*

**Wat het is.** Het niet-inhoudelijke profiel van het kanaal: enkele weken oud, nul abonnees, nul kijkduur, en drie vrijwel identieke schermopnames binnen korte tijd. Dit is voor een spam-classifier het klassieke profiel van een "bulk-upload from a fresh channel"-cluster.

**Wat het verklaart.** Waarom de actie op **kanaal**niveau landde in plaats van op video-niveau. Inhoudelijke vlags zijn normaal gesproken videoniveau; een *cluster*-patroon is kanaalniveau. Dit is de enige hypothese die die specifieke keuze verklaart zonder uit te wijken naar een exceptioneel scenario zoals hacking.

**Wat het niet verklaart.** Waarom juist *dit* kanaal en niet duizenden andere verse kanalen met screencasts. Het versterkt dus de *vorm* van de sanctie maar niet de *selectiviteit*.

**Toetsbaar:** nee — niet van buitenaf te verifiëren.

**Status:** als ** conditionerende factor** met hoge waarschijnlijkheid, niet als primaire oorzaak. Het is de factor die uit "een twijfelachtige video" een "kanaalbrede spam-signalering" maakte.

---

### O2 — Het commentaar van 12 augustus *(in eerdere analyse onderbelicht; nu gedateerd)*

**Wat het is.** Het eigen commentaar *"you're killing it, Jules!…"*, drie dagen voor de ban. Het is de **enige hypothese met een exacte timestamp in de directe aanloop naar de sanctie**.

**Wat het verklaart.** De uiterst korte tijdsspanne tussen het signaal en de ban, en de ogenschijnlijke willekeurige selectie. Een commentaar is normaal geen kanaalgrond; maar een commentaar dat *met het account van het kanaal* is geplaatst en door een classifier als gewelddadige taal wordt gelezen, telt mee in een accountscore.

**Wat het niet verklaart.** Waarom de **spambeleidscategorie** en niet "gewelddadige taal". En een commentaar zou normaal tot een commentaarstraf leiden, niet tot een permanente kanaalban.

**Toetsbaar: ja — en de test is uitgevoerd (3 oktober 2026). UITSLAG: O2 verzwakt.**

De kijkgeschiedenis uit de take-out van 16 augustus 2025 (245 gebeurtenissen, 20/6 t/m 14/8 06:48) bevat twee beslissende tijdstippen:

| | |
|---|---|
| Commentaar geplaatst | **12/08/2025 15:11 CEST** (`13:11:03 UTC`) |
| Video | `yjEJ7PWXVcA` — kanaal `UCETh_r8bn3OY09WLPnnANQA`, **dus Karels eigen kanaal** |
| Karel bekeek diezelfde video | **12/08/2025 15:54 CEST** — 43 minuten later |

**Het commentaar stond dus op een video op zijn eigen kanaal, en hij bekeek die video zelf 43 minuten later.** Een commentaar van de maker op zijn eigen kanaal is geen door derden verspreide gebruikersinhoud, maar een notitie aan het eigen kanaal.

**Waarom dit O2 verder verzwakt.** O2 beredeneerde dat een commentaar "met het account van het kanaal" een vlag kan activeren. Dat blijft in theorie mogelijk, maar een maker die op zijn eigen video een grap maakt is geen reële voorwaarde voor een permanente kanaalban, en verklaart de sanctiecategorie (spam/scam) evenmin als vóór. Het was het enige signal met een timestamp in de aanloop — en nu blijkt ook dát te licht om op te steunen.

**Status: van "enige signaal met een timestamp in de aanloop" naar "bijkomende aanwijzing, geen kandidaat-trigger meer".** Bron: [`3-counter-evidence/3.1-TakeOut-2025.08.16/history/00-ANALYSE_kijkgeschiedenis.md`](../../../../3-counter-evidence/3.1-TakeOut-2025.08.16/history/00-ANALYSE_kijkgeschiedenis.md).

---

### O3 — Merkinbreuk in de titels *(oorspronkelijke hypothese; door de AI-analyses als belangrijkste genoemd)*

**Wat het is.** "Google AI Studio – File Reader" en "YouTube Playlist Collector" bevatten bestaande merknamen.

**Wat het verklaart.** Waarom de sanctie *wel* een "misleidende praktijken"-etiket kreeg: beide titels kunnen gelezen worden als een poging een tool als officieel product voor te doen.

**Wat het niet verklaart.** De twee julievideo's met de **Workspace**-namen stonden al op het kanaal zonder problemen. Een merkvlag had die ook kunnen raken. Bovendien is "slechte kwaliteit" of "merkinbreuk" in de motivering **niet** genoemd — de opgegeven categorie is spam/scam.

**Toetsbaar:** nee. Wel *counter-evidence*: YouTube bevat massaal tutorials met Google-productnamen in de titel; een merkklacht-procedure met human review had een copyright- of trademark-melding opgeleverd, geen kanaalban.

**Status:** **als signaal plausibel, als verklaring zwak.**

---

### O4 — Misinterpretatie van de OAuth-flow als phishing of malware-uitleg *(oorspronkelijke hypothese; door de AI-analyses als tweede genoemd)*

**Wat het is.** De video's tonen het klikken *voorbij* de waarschuwing **"Google has not verified this app"** en het verlenen van brede Drive-scopes, plus het uploaden en downloaden van bestanden. Zowel de Workspace- als de CWS-video ziet dit patroon.

**Wat het verklaart.** De gekozen sanctiecategorie vrijwel exact. Een classifier die getraind is op phishing/tutorials voor schadelijke software ziet hier een tutorial voor: *hoe u de beveiligingswaarschuwing negeert en een app toegang geeft tot al uw bestanden*. Dit is het sterkste inhoudssignaal in het dossier.

**Wat het niet verklaart.** Waarom O3/O4 de twee julievideo's niet eerder troffen — want die tonen exact hetzelfde patroon.

**Toetsbaar:** nee.

**Status:** **als signaal sterk, als verklaring onvolledig** — zie O1 voor de reden dat het kanaalniveau werd gekozen.

---

### O5 — Zichtbaarheid: publiek in plaats van unlisted *(de "video van te lage kwaliteit"-hypothese)*

**Wat het is.** De CWS-video stond op *publiek*, terwijl de Workspace-video's op *unlisted/private* stonden.

**Wat het verklaart.** Waarom juist **deze** video het verschil vormde tussen "geen probleem" (juni–juli) en "ban" (augustus).

**Waarom dit de zwakste inhoudelijke hypothese is.** Drie redenen, en ze zijn cumulatief:
1. **Publiek zijn is geen overtreding.** Uit puurheid van de video volgt geen inbreuk op enig communitybeleid. Dat is een **volledig niet-verdedigbaar** verweer als Karel het zelf zou moeten aanvoeren.
2. **Het is geen "waarschuwing-waardige" overtreding.** Waarschuwingen worden gegeven voor gedrag dat op zichzelf al verkeerd is. Een zichtbaarheidsfout is dat niet.
3. **Het verzwakt de proportionaliteitsklacht.** Een volledige ban is disproportionele *straf*, maar de *grondslag* (video was publiek) is zwak — dus de klacht over proportionaliteit verliest houvast zodra de grondslag wordt benoemd. Het is beter om de grondslag open te laten en uitsluitend op procedure te argumenteren.

**Status:** **verklarend, niet verdedigbaar.** Uitnodiging om deze hypothese in escalaties niet als eigen schuld te presenteren.

---

### O6 — Gedeeld institutioneel IP-netwerk *(in eerdere analyse onderbelicht; in de situatie van Karel sterk)*

**Wat het is.** Karel verbleeft in een forensisch psychiatrisch centrum. Internetverkeer loopt via de collectieve netwerkinfrastructuur: één publiek IP-adres of -bereik, gedeeld door honderden bewoners en personeel. IP-reputatie is een **standaardinput** in spamdetectie.

**Wat het verklaart.** De *selectiviteit-vraag uit O1* die geen enkele inhoudshypothese kan beantwoorden: waarom juist dit kanaal van de duizenden. Dit is de sterkste verklaring voor willekeurige selectie die in het dossier voorkomt, en hij volgt direct uit Karels situatie.

**Wat het niet verklaart.** Waarom de Workspace-video's in juni–juli wél door de filter gingen, en de CWS-video niet — tenzij de grens over tijd is overschreden (andere bewoners triggerden de vlag tussen juli en augustus).

**Toetsbaar:** indirect. Een aanwijzing zou zijn of andere bewoners/gebruikers van het centrum in dezelfde periode te maken kregen met YouTube. Dat is niet systematisch te onderzoeken zonder de instelling te belasten — daarom **niet** als verificatie aangaan, wel als analytische hypothese hanteren.

**Status:** **als analytische verklaring sterk, als bewijslast zwak.** Waardevol om te *kennen* (het verklaart de willekeur), ongeschikt om *mee te argumenteren* (niet aantoonbaar).

---

### O7 — Account-compromisering of straf op de melder *(Karels hypothese #1)*

**Twee varianten, die niet mogen worden samengevouwd:**
- **7a — echte compromittering.** De adverteerders achter de deepfake-campagne namen het account over.
- **7b — straf op de melder.** De geautomatiseerde straf werd op de melder toegepast in plaats van op de fraudeur.

**Wat 7a verklaart.** De volledige willekeur, en dat een account met drie video's zonder enige kijkers opeens een permanente ban verdient.

**Tegen-evidence tegen 7a.** De TakeOut van 16 augustus bevat **uitsluitend de drie oorspronkelijke video's** — geen spam-, geen scaminhoud, geen extra uploads. Een hacker die het kanaal wilde *misbruiken*, zou daarom niets hebben achtergelaten. Dat maakt "overgenomen en misbruikt" minder waarschijnlijk; het sluit een *transiënte* compromittering (wel toegang, niets geüpload) niet uit.

**Wat 7b verklaart.** De volgorde: melding → "no problem at all" → ban. Dit is een bekend patroon bij classifiers die op rapportagedrag trainen in plaats van op gehalte.

**Toetsbaar — en de test is uitgevoerd op 3 oktober 2026. UITSLAG: de hypothese is verzwakt.**

Via de beveiligingsmeldingen zelf is de test niet meer mogelijk: Google toont daar uitsluitend *"Security activity and alerts from the last 28 days"*, en het venster augustus 2025 is daarin definitief verdwenen. De gmailbox bleek wél de bewaarde bron, en die is onderzocht:

| Indicator | Uitkomst |
|---|---|
| Onbekend apparaat of buitenlandse login, 10–16 augustus 2025 | **Geen.** Het enige item in "Recent security activity" is *"New sign-in on Linux — 23 sep 2026"*, zijn eigen sessie |
| E-mail "uw account is mogelijk gecompromitteerd" | **Geen**, in de hele box |
| 2FA-uitdaging of -goedkeuring | **Geen** |
| Security-alerts van Google in augustus 2025 | **Geen.** De enige Google-beveiligingsmails in die periode zijn zelf-geïnitieerd: Takeout-aanvraag 16/8 en archiefaanvraag 16/8 — elk met de standaardzin *"If you didn't make this request, someone may be trying to access your Google account"*. De meldingen bestaan en werken dus; ze staan er alleen niet. |

**Waarom dit 7a flink verzwakt.** Er is een sterkere reden dan het ontbreken van een mail: **2-Step Verification stond aan sinds 20 april 2025**, ruim drie maanden vóór de sanctie. Een volledige overname van het account vereiste dus niet alleen het wachtwoord maar ook de goedkeuring van een 2FA-uitdaging op Karels eigen toestel. Zo'n goedkeuring hoort in het account te verschijnen, en ontbreekt. Een stille overname is daarmee aanzienlijk minder waarschijnlijk.

**Kanttekening die niet mag worden overslaan.** De afwezigheid van een alert bewijst nog steeds niets: Google alarmeert niet bij elke gebeurtenis, en een sessie die via een bestaand geldig cookie werd overgenomen kan zonder e-mail verlopen. Wat het resultaat wél doet, is de hypothese verplaatsen van *een plausibele verklaring* naar *een hypothese zonder enige positieve onderbouwing*. Zij blijft onbewezen — maar zij kan niet langer het frame van de zaak zijn.

**Status: van "meest waarschijnlijk volgens de intuïtie van Karel" naar "niet onderbouwd, en door de eigen beveiligingsinstellingen onwaarschijnlijk."** De rangschikking in §2 is daarmee op één punt achterhaald: O7 was de nummer-één-kandidaat en is het niet meer.

---

### O8 — "Slechte AI-moderatie"

**Status: geen oorzaak, maar het mechanisme — zie §0.** Het is de versterker die uit O1–O7 een permanente kanaalban maakte. Het is niet uit te sluiten, maar ook niet te bewijzen, en het is **niet** de aantrekkelijke verklaring die het lijkt: zodra je het als verklaring aanvoert, moet elk signaal dat vuurde, worden aangewezen — en dat kan niet.

---

## 3. De kern van de procedurekritiek

Het ongelijk ligt niet in de **classificatie** van de overtreding, maar in de **procedure**. Dit is het argument dat overblijft als alle oorzaken wegvallen — en het is daarom ook het enige dat in een escalatie moet staan.

**Het feit dat het aantoonbaar ongelijk maakt — en het is *niet* "er was een waarschuwing die is genegeerd":** YouTube heeft **geen enkele specifieke beleidsbepaling genoemd, en die ook nooit bevestigd toen Karel er zelf één opperde.** Op 5 september 2025 formuleert Karel zelf de hypothese dat het kanaal is geraakt wegens *"trying to get viewers to install harmful software, or directing them to sites that might compromise their privacy"*. YouTube reageert daar nooit inhoudelijk op: geen bevestiging, geen ontkenning, geen andere beleidsnaam. Zeven maanden later (januari 2026, brief aan Alphabet) is dat nog steeds zo.

Dat is een zuiver waarneembaar procedureel feit, en het is sterker dan een bewering over disproportionering, omdat het geen interpretatie vereist:

> **DSA Art. 17 vereist een statement of reasons met de hoofdfeiten én een verwijzing naar de toegepaste beleidsbepaling. In deze zaak is de tweede component nooit geleverd — niet in de banmail, niet in de drie beroepsrondes, niet in het contact met Legal Support, en niet in de twee jaar daarna.**

**Waarom "de reviewer was een AI" niet wegneemt.** De bezwaar "of was dat legal team dan zelf AI?" raakt een echte twijfel, maar hij is juridisch **niet beslissend**:

- **DSA Art. 17** — het defect zit in de **inhoud** van de motivering (ontbrekende feiten én ontbrekende beleidsverwijzing), niet in de auteur ervan. Een mens die een blanco categorie intikt voldoet evenmin.
- **DSA Art. 20** — de interne klacht moet worden behandeld door personeel dat **niet betrokken was bij de oorspronkelijke beslissing**. Het beroep werd binnen **14 uur** afgewezen met de formule *"we reviewed your channel carefully"* — zonder genoemde beoordelaar. Die formulering suggereert menselijke toetsing; de doorlooptijd suggereert dat er geen mens zat.
- **DSA Art. 21(2)** — *beide partijen moeten te goeder trouw deelnemen* aan de procedure, en de instantie kan **geen bindende beslissing** opleggen. Twee gevolgen, en ze moeten niet worden verward:
  - **YouTube is niet juridisch verplicht de ACE-uitspraken uit te voeren.** Dat is waar, en het mag niet als "bindende vonnissen genegeerd" worden geformuleerd. Het hele dossier doet het overigens wél correct — zie de correctie hieronder.
  - **Maar YouTube wél verplicht zich tot te-goeder-trouw-deelname.** Uit de eigen stukken blijkt dat YouTube de ACE-procedure volledig heeft genegeerd en zich bij tweede instantie liet vertegenwoordigen door een **default**. Dat is het tegenovergestelde van te goeder trouw handelen, en dát is wel een af te dwingen plicht.
- **DSA Art. 21(5)** — beslist de instantie **in het voordeel van de gebruiker**, dan draagt de platformaanbieder **alle kosten** en vergoedt hij de redelijke onkosten van de gebruiker. De twee ACE-uitspraken vielen in Karels voordeel → **YouTube is hem de ACE-kosten en redelijke onkosten verschuldigd, en heeft die niet betaald.** Dit is een concrete, meetbare verplichting, geen interpretatie.

⚠️ **Tweede correctie op een niet-gedekt claim (mijnerfout, 3 oktober 2026).** In de eerste versie van dit bestand stond dat een ACE-uitspraak "**bindend** is voor de platformaanbieder" onder verwijzing naar *"DSA Art. 21(5)"*. **Dat is onjuist.** Art. 21(2) stelt expliciet: *"The certified out-of-court dispute settlement body shall not have the power to impose a binding settlement of the dispute on the parties."* Art. 21(5) gaat over **kostenvergoeding**, niet over bindende kracht. Bevestigd tegen de officiële tekst (Regulation (EU) 2022/2065, Art. 21) en tegen de eigen guidance van de CNAM — *"The decisions of ODS bodies are not binding"* — die toezichthouder is in dit dossier.

**Waarom deze correctie meer waard is dan hij lijkt.** Het oude actieplan (`TODO/Action_Plan_Synthesis.md` Actie 3.2) en de meeste oudere analyses in dit dossier hadden het al goed: *"de uitspraak is niet-bindend, maar de DSA verplicht platforms om te goeder trouw deel te nemen."* De correctie is dus geen verlies maar een **versterking**: het argument steunt nu op twee plichten die wél afdwingbaar zijn (te-goeder-trouw-deelname, kostenvergoeding) in plaats van op één die dat niet is.

⚠️ **Gevolg voor de publieke README.** `README.md` beschrijft de ACE-uitspraken als *"ordering YouTube to restore the channel"* / *"which Google now refuses to execute"*. Dat is feitelijk juist (YouTube handelde niet) maar suggereert afdwingbaarheid die Art. 21 niet geeft. Bij een volgende publicatiesynchronisatie moet dit worden gepreciseerd naar: niet-bindende uitspraken, maar een genegeerde te-goeder-trouwplicht plus een onbetaalde kostenvergoedingsplicht.

**Formulering die in elke escalatie hoort:** niet *"de classificatie was fout"* (dat veronderstelt dat de classificatie navolgbaar was — en dat was ze niet), maar **"de procedure gaf mij geen verdedigbare grondslag: nooit een genoemde beleidsbepaling, nooit een feit, nooit een beoordelaar. Dat is precies wat de DSA verbiedt."**

---

## 4. Wat de conclusie is — en wat niet

**Weten:** welke oorzaken het *best* verklaren, en waarom de sanctie op kanaalniveau terechtkwam.

**Niet weten, en waarschijnlijk nooit te weten:** wat de werkelijke trigger was. Dat is geen lacune in het onderzoek maar het *onderzoeksresultaat*: de verstrekte informatie bevat geen enkele toetsbare component van de beslissing.

**Voor een escalatie is dit geen zwakte maar de propositie:**

> De zaak is niet sterk *omdat* de sanctie onterecht was — dat blijft onbewezen.
> De zaak is sterk *omdat* de platformaanbieder, in de banmail, drie beroepsrondes, het contact met Legal Support en twee jaar brieven, **nooit één specifieke beleidsbepaling heeft genoemd en ook niet heeft bevestigd toen Karel er zelf één opperde** — en de ACE-procedure volledig heeft genegeerd in strijd met de te-goeder-trouwplicht van Art. 21(2), met daarnaast een onbetaalde kostenvergoeding onder Art. 21(5).
> Dat is controleerbaar, specifiek, en niet afhankelijk van een gok over de oorzaak.

**Waarom dit ongeveer het enige is dat overblijft.** Elke route die uitging van *welke overtreding* is begaan, is doodgelopen: geen enkel intern kanaal, geen enkele beroepsronde, en geen ACE-procedure heeft een beleidsbepaling opgeleverd. Dat betekent niet dat de zaak zwak is, maar dat de zaak **niet meer over inhoud gaat**. Ze gaat over de vraag of een platform mag beëindigen zonder de grondslag ooit te noemen, en of het een gecertificeerde geschilleninstantie mag negeren. Dat is aantoonbaar, en het is precies waarvoor de DSA bestaat.

---

## 5. Wat de kijk op dit dossier verandert

1. **De oude top-3 was een categoriefout.** "Hack / kwaliteit / AI-moderatie" vermengt oorzaken met een mechanisme. Het echte beeld is: *één of meer oorzaken (O1–O7) plus een mechanisme (O8)*.
2. **Er staan zeven oorzaken in het dossier, niet vijf.** Het commentaar van 12 augustus en het gedeelde institutioneel IP-netwerk stonden in de ruwe analyse maar zijn in de samenvatting niet overgenomen. Het IP-verhaal is bovendien de enige hypothese die de *willekeurige selectie* verklaart — iets wat geen enkele inhoudshypothese kan.
3. **O5 (zichtbaarheid) moet uit de escalaties.** Het is verklarend maar niet verdedigbaar, en het noemen ervan verzwakt de proportionaliteitsklacht.
4. **Het sterkste *waarneembare* feit is de ontbrekende beleidsverwijzing.** YouTube heeft nooit een specifieke beleidsbepaling genoemd en Karel's eigen hypothese daarover nooit bevestigd. Dat is DSA Art. 17 op zijn gezicht en vereist geen interpretatie — daarmee is een *betere* procedureargumentatie beschikbaar dan de bewering over disproportionering, die interpretatie blijft vereisen.
5. **Eén concreet feit ontbreekt nog: het security-log van 10–16 augustus 2025.** Zonder uitkomst blijft O7 de meest plausibele én slechtst onderbouwde hypothese tegelijk.

---

## 6. Wijzigingslog

| Datum | Wijziging |
|---|---|
| 3 oktober 2026 | Document aangemaakt als canonieke eigenaar van de oorzaakanalyse. Oorspronkelijke zeven hypothesen uit `1-PossibleFaults_by.me.md` overgenomen en voorzien van de velden *verklaart / verklaart niet / toetsbaar / status*; gerangschikt. Toegevoegd: onderscheid oorzaak-mechanisme (§0), de nooit genoemde of bevestigde beleidsbepaling als kern van de procedurekritiek (§3), O1 kanaalprofiel als classifier-prior (nieuw), O2 commentaar gedateerd op 3 dagen vóór de ban, O6 uitgelicht als verklaring van de willekeurige selectie, en de uitsplitsing van O7 in 7a/7b met de security-logtest.<br><br>**Twee correcties op niet-gedekte claims, beide uit eigen fout en beide vóór publicatie verwijderd:** (1) de "waarschuwing van 9 augustus 2025" — nooit gebeurd, het bronbestand is Karels eigen gok van 5 september; (2) "een ACE-uitspraak is bindend onder Art. 21(5)" — **onjuist**, Art. 21(2) sluit bindende beslissingen expliciet uit en Art. 21(5) gaat over kostenvergoeding. Het ODS-argument is herbouwd op de twee wél afdwingbare plichten: te-goeder-trouw-deelname (21(2)) en kostenvergoeding (21(5)). |