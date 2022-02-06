### Project Structure

Providing of Non-public-Enviromental Variables in .env -File:
(Template for the Env-File: https://github.com/ValentinHae/DancePlanner/blob/main/.env.template)

Providing of Project-Interfacce in Events.ts (https://github.com/ValentinHae/DancePlanner/blob/main/TelegramBot/Event.ts)

Source-Code of the Bot: https://github.com/ValentinHae/DancePlanner/blob/main/TelegramBot/mod.ts
### Einarbeitung in Deno & Telegram-Bot & Grammy



### Plannung der Conversationen mit Nutzer und Plannung der Datenspeicherung
	/start --> "Hi, ... you can use the following commands:
			1. /help 
			2. /createEvent"

	/help --> "I can work with the following Commands and they do the following things:
			/start : Start the Conversation
			/help : Get an Overview over all the Commands
			/createEvent : Create an new DanceEvent and Publish it

	/createEvent: Workflow getriggert fragt die Informationen nacheinander ab

	-> Wie heißst das Event?
								TITLE: String (100) 	<-
	-> Wann wird das Event Stattfinden?
				startDate: String (10) &! startTime: String (5) 	<-
	-> Wo findet das Projekt statt?
					Addresse String (100)[geparrst: CountryCode, 
						City, Street, HouseNumber, PostCode] 	<-
	-> Welche Tänze kann man dort tanzen? 
					(Auflistung der TanzStile, LIST)		<-

	-> Gibt es einen Flyer oder ein EventBild?
						Bild & Bildname: 
						Bild Git Hochloaden, Namen in JSON	<-
	-> Lat && Long

--> Speicherung als JSON --> Apending in eine Liste speicherung in einer Datei --> Upload der Datei auf GitHub mit den Bildern
