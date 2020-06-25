const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    password: 'admin',
    database: 'database_name',
    host: 'db',
    port: 5432,
})
pool.connect((err, client, release) => {
    if (err) {
        return console.log(err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.log(err.stack)
        }
        console.log(result.rows)
    })
})

pool.query("SELECT * FROM table_name", (error, results) => {
    if (error) {
        console.log(error)
    } else {
        console.log(results.rows)
    }
})


const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
    res.send("It works")
})

const port = 3000
app.listen(port, () => console.log('App listening'))