const db = require('../DataBase/db');





class UserStatisticController {

    async getUserStaticsByDate(req, res) {
        const {id} = req.params;
        let {fromDate, inWeek} = req.query;
        console.log('from date - ', fromDate);
        console.log('in week - ', inWeek);
        console.log('id - ', id);
        fromDate = `'${fromDate}'`
        inWeek = `'${inWeek}'`
        const getUserStatisticsById = `SELECT *
                                       FROM user_statistics
                                       WHERE user_id = ${id} AND date BETWEEN ${fromDate} AND ${inWeek}`
        db.all(getUserStatisticsById, (err, row) => {
            if (err) {
                console.log(err)
            } else {
                console.log(row);
                return res.json(row)
            }
        })
    }

    async getAllUserData(req, res) {

        console.log(req.query);
        let {perPage, page} = req.query;
        page = page || 1;
        perPage = perPage || 30;
        let offset = page * perPage - perPage;

        const userData = `SELECT id,
                                 first_name,
                                 last_name,
                                 email,
                                 gender,
                                 ip_address,
                                 sum(user_statistics.page_views) as total_views,
                                 sum(user_statistics.clicks)     as total_clicks
                          FROM users
                                   JOIN user_statistics ON users.id = user_statistics.user_id
                          GROUP BY user_statistics.user_id
                          LIMIT ${perPage} OFFSET ${offset}`

        db.all(userData, (err, row) => {
            if (err) {
                console.log(err)
            } else {
                return res.json(row)
            }
        })

    }

    async getFirstWeekDate(req, res) {
        const {id} = req.params;
        const getByDate = `SELECT date
                           FROM user_statistics
                           WHERE user_id = ${id}
                           LIMIT 1`;

        db.all(getByDate, (err, row) => {
            if (err) {
                console.log(err);
            } else {
                let fromDate = row[0].date;
                let inWeek = new Date(new Date(fromDate).setDate(new Date(fromDate).getDate() + 7));
                inWeek = inWeek.toLocaleString().split(' ', 1)[0]
                return res.json({fromDate, inWeek})
            }
        })
    }


}


module.exports = new UserStatisticController();