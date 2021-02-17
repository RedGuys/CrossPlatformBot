const User = require('./User');
const Chat = require('./Chat');

class Request {
    content;
    user = User.prototype;
    chat = Chat.prototype;

    constructor(content,user,chat) {
        this.content = content;
        this.user = user;
        this.chat = chat;
    }
}

module.exports = Request;