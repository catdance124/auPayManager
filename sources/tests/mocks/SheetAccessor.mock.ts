export const SheetAccessorMock = (headers: string[], sheetName: string) => {
    return {
        _headers: headers,
        _sheet: {},
        _rows: [headers],
        constructor: jest.fn(),
        _getRecordNumber: jest.fn(),
        _getSheet: jest.fn(),
        hideUpperRows: jest.fn(),
        readValuesFromSheet: jest.fn(function () {
            return this._rows.slice(1);
        }),
        writeValuesToSheet: jest.fn(function (rows: any[][]) {
            this._rows = rows;
        }),
    };
};
