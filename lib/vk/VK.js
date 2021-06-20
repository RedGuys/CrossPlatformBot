const NVBA = require("node-vk-bot-api");
const Request = require("../common/Request");
const Response = require("../common/Response");
const Module = require("../common/Module");
const User = require("../common/User");
const Chat = require("../common/Chat");
const Utils = require("../common/Utils");
const fs = require("fs");
const axios = require("axios");
const FormData = require('form-data');

class VK extends Module {

    _bot;
    _ModuleManager;

    constructor(token) {
        super();
        this._bot = new NVBA(token);
        this._bot.event("message_new", async (ctx) => {
            this._ModuleManager.workMessage(
                new Request(ctx.message.text, await this.getUser(this, ctx), new Chat('vk', ctx.message.peer_id)),
                new Response(
                    async (text) => {
                        await ctx.reply(text)
                    },
                    async (photo) => {
                        await this.sendPhotosByURL(this, ctx, photo)
                    }
                )
            );
        });
        this._bot.startPolling();
    }

    registerModuleManager(moduleManager) {
        this._ModuleManager = moduleManager;
    }

    async getUser(module = this, ctx) {
        let user = (await module._bot.execute('users.get', {user_id: ctx.message.from_id, fields: "domain"}))[0];
        return new User('vk', ctx.message.from_id, user.domain, user.first_name, user.last_name);
    }

    async sendPhotosByURL(module, ctx, photos) {
        let att = [];
        for (let photo of photos) {
            let file = await Utils.downloadPhoto(photo);
            let photoId = await this.uploadPhoto(module, file, ctx.message.peer_id);
            att.push(photoId);
        }
        await ctx.reply("", att)
    }

    async uploadPhoto(module, filePath, peerId) {
        const {upload_url: url} = await module._bot.execute('photos.getMessagesUploadServer', {
            peer_id: peerId,
        })

        const form = new FormData();
        form.append('photo', fs.createReadStream(filePath));
        const {data} = await axios.post(url, form, {
            headers: form.getHeaders(),
        });

        const [photo] = await module._bot.execute('photos.saveMessagesPhoto', data)
        return [`photo${photo.owner_id}_${photo.id}_${photo.access_key}`]
    }
}

module.exports = VK;