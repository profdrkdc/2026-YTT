# Voorwaarden voor de volgende publieke sync (2026-YTT)

> Aangemaakt 12 oktober 2026. **Eigenaar:** deze notitie. **Doel:** voorkomen dat de eerstvolgende `git push` naar `public/main` materiaal publiceert dat niet voor publicatie bedoeld is.
> **Status van het repo op dit moment:** lokale `main` = **10 commits voor** op `public/main` (de ACE-correspondentie, de zeven tickets, de "2 business days"-belofte en de kijkgeschiedenis-test staan nog niet online). **Niet pushen vóór deze pass.**

---

## Blok A — privacy (harde blokkade; niet publiceren zonder Karel)

| Waar | Wat | Actie in de publieke tak |
|---|---|---|
| `2-YouTube-Policy/2.1-Possible-Faults-(me)/0-HOOFDANALYSE_oorzaken_en_rangschikking.md` §O6 | "Karel verbleeft in een forensisch psychiatrisch centrum" + gedeeld institutioneel IP | Geanonimiseerd ("collectief institutioneel netwerk van de instelling") of §O6 weglaten |
| Alle nieuw toegevoegde bestanden sinds de vorige publicatie | Verwijzingen naar FPC, internering, verblijfsmaatregel, begeleiding | `git grep -ilE "forensisch|FPC|interner|verblijfsmaatregel|Melissa|Elias"` draaien vóór push |

**Waarom dit telt:** de publieke README nodigt uit om het dossier te lezen. Wie de brief aan Alphabet-board of BIPT stuurt met een repo-link, nodigt de tegenpartij uit om *alles* te lezen — inclusief de eigen zwakheden.

## Blok B — interne afwegingen (geen PII, wel munitie)

Deze delen horen in het dossier maar niet in een publieke tak die als bewijsdossier wordt aangeboden:

- §O5-status *"verklarend, niet verdedigbaar"* (publiek-zijn van de video) — nooit als eigen schuld presenteren; publiceren maakt het een quote tegen Karel.
- De interne rangschikking van hypothesen (O1–O7) en de notatie dat O7 "meest plausibel én slechtst onderbouwd" was.
- Elke formulering die als bekentenis gelezen kan worden ("mijn video stond publiek", "ik vermoed een hack").

**Regel:** de publieke tak bevat wat Karel *wil* laten zien (tijdlijn, correspondentie, ACE-beslissingen, de Art. 17- en Art. 20-tekortkomingen) — niet wat hij *onderzoekt*.

## Blok C — consistentie vóór publicatie

1. `README.md` moet de gecorrigeerde ACE-versie bevatten (✅ 12/10/2026 gedaan in de werkboom; check bij push of de publieke tak die tekst heeft).
2. `dossier-web` opnieuw bouwen zodat `dist/` overeenkomt met de bronteksten (nu nog de oude tekst).
3. Symlink-doelen en paden nakijken (zie commit `5baaa4c` — paden zijn al eens verhuisd).
4. `public-redacted`-tak: één oude initial commit; óf na deze pass laten vervallen en duidelijk maken dat `main` publiek is, óf onderhouden. Nu Dubbelheid in de lucht.

## Blok D — besluit

Publiceren is een **externe daad** → Karel beslist, per keer. Deze notitie is geen akkoord.
