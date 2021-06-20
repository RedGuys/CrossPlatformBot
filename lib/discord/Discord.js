const DiscordJs = require("discord.js");
const Request = require("../common/Request");
const Response = require("../common/Response");
const Module = require("../common/Module");
const User = require("../common/User");

class Discord extends Module {

    _bot;
    _ModuleManager;

    constructor(token) {
        super();
        this._bot = new DiscordJs.Client();
        this._bot.on("message", (message) => {
            this._ModuleManager.workMessage(
                new Request(message.content, new User('ds', message.author.id, message.author.username)),
                new Response(
                    async (text) => {
                        await message.reply(text)
                    },
                    async (photo) => {
                        await message.reply({files: photo});
                    }
                ));
        });
        this._bot.login(token);
    }

    registerModuleManager(moduleManager) {
        this._ModuleManager = moduleManager;
    }
}

module.exports = Discord;