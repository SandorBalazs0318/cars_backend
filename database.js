import sqlite3, { Database } from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");
const tablazat = async () => {
  await db.run(
    "CREATE DATABASE IF NOT EXISTS cars(id INTIGER PRIMARY KEY AUTOINCREMENT, BRAND TEXT, MODEL TEXT, COLOR TEXT, YEAR INTIGER)"
  );
};

function dbQuery(sql, params = []){
  return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
          if(err) reject(err);
          else resolve(rows);
      });
  });
}

function dbRun(sql, params = []){
  return new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
          if(err) reject(err);
          else resolve(this);
      });
  });
}

export {db, dbQuery, dbRun, initializeDB};