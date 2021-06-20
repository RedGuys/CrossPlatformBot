const User = require('./User');
const Chat = require('./Chat');

class Request {
    constructor(content, user, chat) {
        this._content = content;
        this._user = user;
        this._chat = chat;
    }

    _content;

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    _user;

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    _chat;

    get chat() {
        return this._chat;
    }

    set chat(value) {
        this._chat = value;
    }
}

module.exports = Request;