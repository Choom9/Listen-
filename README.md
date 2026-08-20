Listen!

Das ganze fing an mit einem konkreten Problem: Ich wollte lernen mit meinem Gehör Akkorde in Songs zu erkennen.
Es gibt einige Apps, die Übungen zu sowas und noch viel mehr anbieten. 

xxx

Nutzung von KI

Das ganze wurde nicht "agentisch" erstellt. Stattdessen habe ich KI wie eine Art "Super Google" oder Tutor benutzt, mit der konkreten Anweisung: "Gib mir nicht den ganzen Code sondern erkläre mir Syntax und Konzepte, damit ich lerne und verstehe was ich hier tue".

Funktionen

Erfassen wer wem für was Geld gegeben hat
Saldo anzeigen aus Sicht von Nikos oder Yelva (Benutzer wird beim Starten gewählt)
Einträge dauerhaft in einer Datenbank speichern (der Gedanke war, dass wir beide darauf zugreifen könnten)
Ordner Struktur

Frontend: User Interface, Anpassung des Saldos (Vorzeichen) je nachdem welcher Nutzer ausgewählt wurde, Senden der Einträge an Backend Backend: Berechnung des Saldos, Senden des Saldos an Frontend, Speicherung der Einträge in eine Datenbank, Datenbank

Benutzte Sprachen

HTML
CSS
JavaScript
SQL
Bibliotheken

Express.js (für HTTP Anfragen und Server-Routen)
cors (Frontend und Backend laufen auf unterschiedlichen Ports, cors sorgt dafür, dass Browser Verbindung nicht blockiert)
Laufzeiten

Browser
Node.js
Datenbank

SQLite
Starten

Projekt herunterladen
Im Hauptordner die benötigten Bibliotheken installieren: -> Projektordner im Terminal öffnen und "npm install" eingeben
Backend starten: "node Backend/LaldoServer.js
Frontend mit Live Server öffnen
Was ich gelernt habe

Kommunikation zwischen Frontend und Backend mit fetch, HTTP und JSON
Damit JavaScript auf etwas anderem als einem Browser läuft, braucht man NODE.js
Grundlegende Datenstruktur: Backend berechnet, speichert in Datenbank, schickt Ergebnis der Berechnung an Frontend...
Daten dauerhaft speichern mit SQLite und SQL
Zugriff auf Methoden aus Bibliotheken
DISCLAIMER: Es gibt eindeutig Dinge an diesem Code, die ich nicht zu 100% verstehe. Anwenden und so grob verstehen was man macht geht ganz gut aber dahinter liegende Konzepte verwirren mich zum Teil noch Konkreter, Was ich immer noch nicht ganz verstehe

asynchrone Abläufe
Internet Kommunikation: Was sind Port? Was ist HTTP?
Wie Bibliotheken grundlegend funktionieren
