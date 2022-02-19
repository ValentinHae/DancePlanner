## The Grammy based TelegramBot

Development of the web application using the Grammy framework and its functionalities. The Telegrambot is run by a Oak-Frame-Server on Deno own Deploy Structure and saves all Data in a GitHub Json-File.

#### File strucutre
Source-Code of the Bot: [Source Code](https://github.com/ValentinHae/DancePlanner/blob/main/TelegramBot/bot.ts)<br />
Source-Code of the Server: [Source-Code](https://github.com/ValentinHae/DancePlanner/blob/main/TelegramBot/mod.ts)<br />
Providing of Non-public-Enviromental Variables in .env -File:
(Template for the Env-File: [Tempalte](https://github.com/ValentinHae/DancePlanner/blob/main/.env.template)<br />

Providing of Project-Interfacce in Events.ts [Event-Class](https://github.com/ValentinHae/DancePlanner/blob/main/TelegramBot/Event.ts)<br />

### Ground-Knowlegde for the Bot Creation
The Bot is created on the [Grammy-Framework](https://grammy.dev/) which provides a lot of in build features and Plugins.


### Plan of Bot-User Conversationen (1. Design)
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

--> Saving as JSON --> Apending in a Array --> Upload to GitHub with all nesseary Data

### Open Points
<ul> Automatic Geocoding </ul>
<ul> Tests for Bot-Steps </ul>
<ul> Inline Keyboards </ul>
<ul> Inline Queries </ul>
