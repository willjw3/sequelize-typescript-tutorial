import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';
import {users} from './seeders/users';
import {projects} from './seeders/projects'
import {projectassignments} from './seeders/projectassignments'

app.get('/', (req, res) => {
    db.User.findAll({
        include: {
            model: db.Project
        }
    }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})