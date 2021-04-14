const Telegraf = require("telegraf").Telegraf;
const Request = require("../common/Request");
const Response = require("../common/Response");
const Module = require("../common/Module");
const User = require("../common/User");

class Telegram extends Module {

    #bot;
    #ModuleManager;

    constructor(token) {
        super();
        this.#bot = new Telegraf(token);
        this.#bot.on("text",(ctx) => {
            this.#ModuleManager.workMessage(new Request(ctx.message.text,new User('tg',ctx.from.id,ctx.from.username,ctx.from.first_name,ctx.from.last_name)),
                new Response(
                    async (text) => {await ctx.reply(text)},
                    async (photo) => {
                        for (let url of photo.url) {
                            await ctx.replyWithPhoto(url)
                        }
                    }
                    ));
        });
        this.#bot.startPolling();
    }

    registerModuleManager(moduleManager) {
        this.#ModuleManager = moduleManager;
    }
}

module.exports = Telegram;