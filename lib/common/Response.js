class Response {

    constructor(reply, replyPhoto) {
        this._reply = reply;
        this._replyPhoto = replyPhoto;
    }

    _reply = (text) => {
    };

    _replyPhoto = (photos) => {
    };

    reply(text) {
        this._reply(text);
    }

    replyPhoto(photos) {
        this._replyPhoto(photos);
    }
}

module.exports = Response;