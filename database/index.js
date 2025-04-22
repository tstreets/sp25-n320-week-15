const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("database/gems.sqlite", function (err) {
  if (err) console.log("Failed Connect: Gems SQLite Database");
  else console.log("Successful Connect: Gems SQLite Database");
});

async function getAllGemCharacters() {
  return new Promise((resolve, reject) => {
    db.all(`select * from gemCharacters;`, function (err, rows) {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

module.exports = {
  getAllGemCharacters,
};
