class Chat {
    constructor(module, id) {
        this._module = module;
        this._id = id;
    }

    _module;

    get module() {
        return this._module;
    }

    _id;

    get id() {
        return this._id;
    }
}

module.exports = Chat;