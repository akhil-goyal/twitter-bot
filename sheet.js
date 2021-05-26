const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {

    constructor() {
        this.doc = new GoogleSpreadsheet('1TPC5F_sAcLxXbDL-d3QupdSaT6Gi8f_sudT64aUQA5g');
    }

    async load() {
        await this.doc.useServiceAccountAuth(require('./credentials.json'));
        await this.doc.loadInfo();
    }

    async getRows() {
        const sheet = this.doc.sheetsByIndex[0];
        return await sheet.getRows();
    }

}