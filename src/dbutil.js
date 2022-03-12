var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

const dbSource = "./data.db";

if (!fs.existsSync(dbSource)) {
    console.error("ERR: db does not exist");
    throw Error("db does not exist.");
}

let db = new sqlite3.Database(dbSource, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
});

module.exports = {
    db: db
};