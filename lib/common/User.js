class User {
    constructor(module, id, username, first_name, last_name) {
        this._module = module;
        this._id = id;
        this._username = username;
        this._first_name = first_name
        this._last_name = last_name;
    }

    _module;

    get module() {
        return this._module;
    }

    _id;

    get id() {
        return this._id;
    }

    _username;

    get username() {
        return this._username;
    }

    _first_name;

    get first_name() {
        return this._first_name;
    }

    _last_name;

    get last_name() {
        return this._last_name;
    }
}

module.exports = User;