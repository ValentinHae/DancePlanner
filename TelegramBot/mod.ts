// Import from the external dependencies is being loaded from the deps.ts-file
import {
    Bot,
    Context,
    GitRequestConfig,
    SessionFlavor,
    config
} from "./deps.ts";

// Import of internal dependencies
import {
    DanceEvent
} from "./Event.ts";
import {
    updateContent
} from "./GitTransfer.ts";



// Get Enviromental-Variables as CONST
// Get the Telegram-Bot-Token
const ENV = config();
const TOKEN = ENV.TELEGRAM_TOKEN as string;
// Create thee GitHub-Request-Repository
const GITHUB: GitRequestConfig = new GitRequestConfig("ValentinHae", "DancePlanner", "Events.json");
// Setting Context of the Session
type MyContext = Context & SessionFlavor < DanceEvent > ;
// create new Bot-Instance from the Grammy-Framework
const BOT: Bot = new Bot < MyContext > (TOKEN);

// Definition of Global Variables
let currentQuestionId: number
let buffer = new Array();

// Bot -Function Definition
// Start Command
BOT.filter(ctx => ctx.chat?.type === 'private').command('start', async ctx => {
    let x = await ctx.reply(
        `Hi,
        How can I help you. Use the following commands for getting more Informationen:
        /help
        /createEvent`
    );
});

// Help Command
BOT.filter(ctx => ctx.chat?.type === 'private').command('help', async ctx => {
    let x = await ctx.reply(
        `Hi,
        I'm able to create new Danceing Events, which will be shown on our Webpage.
        If you want to create a new Event type: 
        /createEvent`
    );

});

// Create new Event
BOT.filter(ctx => ctx.chat?.type === 'private').command('createEvent', async ctx => {
    let x = await ctx.reply(
        `Perfect, could you please state the Title of the Event?`, {
            reply_markup: {
                force_reply: true
            },
        }
    );
    currentQuestionId = ctx.msg.message_id;
});

// Message Recieve Validation
BOT.on("message", async (ctx) => {
    // Check if Message is reply of a Question:
    if (ctx.msg.reply_to_message) {
        let reply = ctx.msg.reply_to_message;
        if ((currentQuestionId + 1) == reply.message_id) {
            let answer = ctx.msg.text;
            // Append answer to answer list
            buffer.push(answer);
            // Send next question
            if (buffer.length == 1) {
                await ctx.reply(
                    `Please enter as next the DanceStyles.`, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            //  StartDate-Attribute
            if (buffer.length == 2) {
                await ctx.reply(
                    `On which day will the Event be?`, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            // City-Attribute
            if (buffer.length == 3) {
                await ctx.reply(
                    `In which City will be the Event?`, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            // Country-Code-Attribute
            if (buffer.length == 4) {
                await ctx.reply(
                    `In which Country will be the Event?`, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            // Street-Attribute
            if (buffer.length == 5) {
                await ctx.reply(
                    `In which street is the Event? `, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            // House-Number-Attribute
            if (buffer.length == 6) {
                await ctx.reply(
                    `What is the Housenumber for the Event? `, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            // StartTime-Attribute
            if (buffer.length == 7) {
                await ctx.reply(
                    `At which time is the Event starting?`, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            // Lat-Attribute
            if (buffer.length == 8) {
                await ctx.reply(
                    `Could you please provide an Link to the Event (or let it empty)?`, {
                        reply_markup: {
                            force_reply: true
                        },
                    }
                );
                currentQuestionId = ctx.msg.message_id;
            };
            if (buffer.length == 9) {
                // Create new ID:""}
                let cryptoID : string = crypto.randomUUID() as string;
                // Storage of the single Parts of the new Object
                let NewEvent: DanceEvent = {
                    id: cryptoID,
                    title: buffer[0],
                    dances: buffer[1],
                    startDate: buffer[2],
                    city: buffer[3],
                    countryCode: buffer[4],
                    lat: 0,
                    lon: 0,
                    street: buffer[5],
                    housenumber: buffer[6],
                    startTime: buffer[7],
                    link: buffer[8],
                    chatLink: ""
                };
                let response = await updateContent(NewEvent, GITHUB);
                // Give Response to User
                if (response !== 200) {
                    await ctx.reply(
                        `Sorry, an error Occoured please Contact the Support over our Webpage.`
                    );
                } else {
                    await ctx.reply(
                        `Thanks the Event has been saved and published at our Website. \nWe wish you a good Day and hope to see you there.`
                    );
                };
                // Clear the Buffer for new Object
                buffer = [];
            };
        } else {
            console.error();
        };
    } else {
        // Get the chat identifier.
        const chatId: number = ctx.msg.chat.id;
        await BOT.api.sendMessage(chatId, `Sorry, I think I did not unstand what you are trying to say. \nIf you need help, please use /help.`);
    };

});
// Catch errors and log them
BOT.catch(err => console.error(err))

// Start bot!
BOT.start()

if (import.meta.main){
    console.log(TOKEN);
}