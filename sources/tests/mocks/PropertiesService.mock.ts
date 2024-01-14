export const PropertiesServiceMock = {
    _store: {},
    getProperty: jest.fn(function (key) {
        return this._store[key];
    }),
    setProperty: jest.fn(function (key, value) {
        this._store[key] = value;
    }),
    deleteProperty: jest.fn(function (key) {
        delete this._store[key];
    }),
};
