# DancePlanner

### Dance Planner - WWI20DSA


The Aim of the Application is to create Dance-Events via Telegram and to invite People over an Svelte Application to come to the Events. We also provide a high amount of filter functionalities, which help the Users to find there desired Event easily.

#### Structure of the application

Telegram-Bot Source-Code (Tobias): [Code](https://github.com/ValentinHae/DancePlanner/tree/main/TelegramBot)<br />
&emsp; - Deeper information in the [Bot ReadMe](https://github.com/ValentinHae/DancePlanner/blob/main/TelegramBot/README.md)

Svelte-Webpage (Valentin): [Code](https://github.com/ValentinHae/DancePlanner/tree/main/DancePlanner) <br />
&emsp; - Deeper information in the [Webpage ReadMe](https://github.com/ValentinHae/DancePlanner/blob/main/DancePlanner/README.md)

## How to use it

![image](https://user-images.githubusercontent.com/79450010/152698649-5d29b4a6-d90c-4a4a-88ce-5d427a760862.png)

#### To search a dance event

The Landing-page consists of the searcharea, where you can input your desired dancestyle and the city you want the event to be at, as well as a radius to also see events in close proximity. After you input your preferences, you are able to see the output in form of information cards down below. Each card is a summary of all important information regarding the event. Uppon hovering over the cards, a map appears, with a marker showing you the exact geolocation of the event.
<br />
If you are planning to host or knew someone, which is going to make a dance Event, how can you share this Information with the other Users?  <br />
Well, it is quite simple. You will have to just use our custom-made Telegram Bot DEB. And he will guide you through the hole Process, step by step. So lets take a look at the Process.
<br />
The first Thing which you will have to do in Order to create a new Event after the Conversation start is to type: <br />/createEvent <br />
<img width="454" alt="Chat1" src="https://user-images.githubusercontent.com/59162254/154306435-da048260-3cb6-47f2-aa3b-e1226d22c3cf.png"><br />
With this simple Command the Bot will start directly into the Event Generation Process. <br /><img width="454" alt="Chat2" src="https://user-images.githubusercontent.com/59162254/154306692-d0542b73-4c44-4e85-a38b-af43b670dde5.png"> <br />
He will ask you step by step the most important Information about the Event and will publish them right after all are collected.
Please Note that in Order to make the Information saved correctly, it is necessary to answer using the Reply Function as shown above.
<br />
After the Process is Finished you will receive a Confirmation and Head over to our Page to see your created Event.
Hope you have a nice time, and a lot of fun by Dancing.

## Deploying of the Application 

### Telegrambot
Add the Telegrambot on Telegram: @Dance_Event_Planning_Bot <br />
Hosted by: Deno Deploy (If the Bot doesn`t reply please start him, by visiting https://dance-planner.deno.dev/)

