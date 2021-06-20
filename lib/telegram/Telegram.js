const Telegraf = require("telegraf").Telegraf;
const Request = require("../common/Request");
const Response = require("../common/Response");
const Module = require("../common/Module");
const User = require("../common/User");

class Telegram extends Module {

    _bot;
    _ModuleManager;

    constructor(token) {
        super();
        this._bot = new Telegraf(token);
        this._bot.on("text", (ctx) => {
            this._ModuleManager.workMessage(new Request(ctx.message.text, new User('tg', ctx.from.id, ctx.from.username, ctx.from.first_name, ctx.from.last_name)),
                new Response(
                    async (text) => {
                        await ctx.reply(text)
                    },
                    async (photo) => {
                        for (let url of photo) {
                            await ctx.replyWithPhoto(url)
                        }
                    }
                ));
        });
        this._bot.startPolling();
    }

    registerModuleManager(moduleManager) {
        this._ModuleManager = moduleManager;
    }
}

module.exports = Telegram;