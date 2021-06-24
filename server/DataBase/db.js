const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const DBSOURCE = './DataBase/SQLite/users.sqlite';

const usersFile = fs.readFileSync('./DataBase/staticData/users.json');
const userStaticsStatics = fs.readFileSync('./DataBase/staticData/user_statistics.json');
const users = JSON.parse(usersFile.toString());
const userStatistics = JSON.parse(userStaticsStatics.toString());


const createUsers = `CREATE TABLE users (
         id INTEGER PRIMARY KEY UNIQUE,
         first_name,
         last_name,
         email,
         gender,
         ip_address
     )`;


const createUserStatistics = `CREATE TABLE user_statistics (
    user_id INTEGER,
    date TEXT,
    page_views INTEGER,
    clicks INTEGER
)`

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        return console.log('database connection error: ' + err.message)
    } else {
        console.log('Connected to the in-memory database')

        db.run(createUsers, err => {
            if (err) {
                console.log('User tables already exist');
            } else {
                const addUsers = 'INSERT INTO users VALUES(?,?,?,?,?,?)';
                users.forEach(user => {
                    const {id, first_name, last_name, email, gender, ip_address} = user;
                    db.run(addUsers, [id, first_name, last_name, email, gender, ip_address])
                })
                console.log('Creating users table');
            }
        })

        db.run(createUserStatistics, err => {
            if (err) {
                console.log('User statistic tables already exist')
            } else {
                const addUserStatistics = 'INSERT INTO user_statistics VALUES(?,?,?,?)'
                userStatistics.forEach(userStatistic => {
                    const {user_id, date, page_views, clicks} = userStatistic
                    db.run(addUserStatistics, [user_id, date, page_views, clicks])
                })
                console.log('Creating user statistics table');
            }
        })
    }
})
module.exports = db;
