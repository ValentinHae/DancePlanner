// External Imports
import {
    Bot,
    Context,
    GitRequestConfig,
    SessionFlavor,
    session,
} from "./deps.ts";

// Internal Imports
import {
    DanceEvent
} from "./Event.ts";
import {
    updateContent
} from "./GitTransfer.ts";

// Get Enviromental-Variables as CONST
// Get the Telegram-Bot-Token
const TOKEN: string =  Deno.env.get("TELEGRAM_TOKEN") as string;
console.log(`Bot-Token: `,TOKEN);

// Create the GitHub-Request-Repository
const GITHUB: GitRequestConfig = new GitRequestConfig( String(Deno.env.get("GitHubUsername")),  String(Deno.env.get("GitHubRepository")),  String(Deno.env.get("GitHubFilePath")));
console.log(GITHUB);

//Definition of Session Interface
interface SessionData {
    chatID: number;
    currentQuestionId: number;
    buffer: Array < string > ;
};

// Setting Context of the Session
type MyContext = Context & SessionFlavor < SessionData > ;
// create new Bot-Instance from the Grammy-Framework
export const BOT = new Bot < MyContext > (TOKEN);

// Install of session middleware, and define the initial session value
function initial(): SessionData {
    return {
        chatID: 0,
        currentQuestionId: 0,
        buffer: []
    };
};

BOT.use(session({
    initial
}));

// Start Command
BOT.filter(ctx => ctx.chat?.type === 'private').command('start', async ctx => {
    await ctx.reply(
        `Hi,\nHow can I help you. Use the following commands for getting more Informationen:\n/help\n/createEvent`
    );
});
   // Help Command
   BOT.filter(ctx => ctx.chat?.type === 'private').command('help', async ctx => {
    await ctx.reply(
        `Hi,\nI'm able to create new Danceing Events, which will be shown on our Webpage.\nIf you want to create a new Event type: \n/createEvent`
    );
});

// Create new Event
BOT.filter(ctx => ctx.chat?.type === 'private').command('createEvent', async ctx => {
    await ctx.reply(
        `Perfect, could you please state the Title of the Event?`, {
            reply_markup: {
                force_reply: true
            },
        }
    );
    ctx.session.currentQuestionId = ctx.msg.message_id;
});

// Show Session-Data [DEV]
BOT.filter(ctx => ctx.chat?.type === 'private').command('session', async ctx => {
    await ctx.reply(
        `Session-Data: \nChat-ID: ${ctx.session.chatID}\nCurrent-Question-ID: ${ctx.session.currentQuestionId}\nBuffer: ${ctx.session.buffer}`
    );
});

// Message Receive Validation
BOT.on("message", async (ctx) => {
    // Check if Chat-Id is present if not set it for Session
    if ((ctx.session.chatID == 0)) {
        ctx.session.chatID = ctx.msg.chat.id;
    };
    // Check if Message is not reply of a Question:
    console.log(!ctx.msg.reply_to_message);
    if (!ctx.msg.reply_to_message) {
        // no Message Reply
        await BOT.api.sendMessage(ctx.session.chatID, `Sorry, I think I did not unstand what you are trying to say. \nIf you need help, please use /help.`);
    } else {
        // Reply to a Message:
        let reply = ctx.msg.reply_to_message;
        if (!((ctx.session.currentQuestionId + 1) == reply.message_id)) {
            // Log Error to Console
            console.error();
        } else {
            if (ctx.msg.text == undefined) {
                // Error Message
                await BOT.api.sendMessage(ctx.session.chatID, `Please enter a valid Input.`);
            } else {
                // Append Answer to Session-Buffer
                let answer: string = ctx.msg.text;
                ctx.session.buffer.push(answer);
                // Send next question
                if (ctx.session.buffer.length == 1) {
                    await ctx.reply(
                        `Please enter as next the DanceStyles.`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                //  StartDate-Attribute
                if (ctx.session.buffer.length == 2) {
                    await ctx.reply(
                        `On which day will the Event be?`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                // City-Attribute
                if (ctx.session.buffer.length == 3) {
                    await ctx.reply(
                        `In which City will be the Event?`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                // Country-Code-Attribute
                if (ctx.session.buffer.length == 4) {
                    await ctx.reply(
                        `In which Country will be the Event?`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                // Street-Attribute
                if (ctx.session.buffer.length == 5) {
                    await ctx.reply(
                        `In which street is the Event? `, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                // House-Number-Attribute
                if (ctx.session.buffer.length == 6) {
                    await ctx.reply(
                        `What is the Housenumber for the Event? `, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                // StartTime-Attribute
                if (ctx.session.buffer.length == 7) {
                    await ctx.reply(
                        `At which time is the Event starting?`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                // Long-Attribute
                if (ctx.session.buffer.length == 8) {
                    await ctx.reply(
                        `Please Provide the Latitude of the Event?\n If you need help to get the Lat & Long feel free to visit: https://www.latlong.net/convert-address-to-lat-long.html`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                if (ctx.session.buffer.length == 9) {
                    await ctx.reply(
                        `Please Provide the Longitude of the Event?`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                // Link-Attribute
                if (ctx.session.buffer.length ==10) {
                    await ctx.reply(
                        `Could you please provide an Link to the Event (or let it empty)?`, {
                            reply_markup: {
                                force_reply: true
                            },
                        }
                    );
                    ctx.session.currentQuestionId = ctx.msg.message_id;
                };
                if (ctx.session.buffer.length == 11) {
                    // Create new ID:""}
                    let cryptoID: string = crypto.randomUUID() as string;
                    // Storage of the single Parts of the new Object
                    let NewEvent: DanceEvent = {
                        id: cryptoID,
                        title: ctx.session.buffer[0],
                        dances: ctx.session.buffer[1],
                        startDate: ctx.session.buffer[2],
                        city: ctx.session.buffer[3],
                        countryCode: ctx.session.buffer[4],
                        lat: Number(ctx.session.buffer[8]),
                        lon: Number(ctx.session.buffer[9]),
                        street: ctx.session.buffer[5],
                        housenumber: ctx.session.buffer[6],
                        startTime: ctx.session.buffer[7],
                        link: ctx.session.buffer[10],
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
                    ctx.session.buffer = [];
                };
            };
        };
    };
});
// Catch errors and log them to Console
BOT.catch(err => console.error(err));

export default BOT;
// // Start bot! - [Run until interruped through the Cmd]
BOT.start();