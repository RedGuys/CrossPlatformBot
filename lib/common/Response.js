class Response {

    reply = (text) => {};
    replyPhoto = ({url = [],file = []}) => {};

    constructor(reply,replyPhoto) {
        this.reply = reply;
        this.replyPhoto = replyPhoto;
    }
}

module.exports = Response;