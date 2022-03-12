let db = require('./dbutil').db;

function _getData() {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all('select * FROM sample', (err, rows) => {
                if (err)
                    reject(err);
                resolve(rows);
            });
        });
    }); 
}

_getData().then(x => {
    console.log(x); // x will be an empty array if no rows.

    if (x.length <= 0) {
        console.log("empty")
    } 
})