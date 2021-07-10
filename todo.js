const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

function mid(req, res, next) {
    console.log(req.query);
    console.log(req.params);
    next();
}

const todos = ["Apple", "Orange", "Banana"]



app.get('/api', mid, (req, res) => {
    res.send(todos)
})

app.post('/api/add', (req, res) => {

    var newItem = req.body.item
    todos.push(newItem)
    res.send('An item is added', todos)
})

app.delete('/api/deleteOne', (req, res) => {
    todos.pop()
    res.send('An item is deleted', todos)
})

app.delete('/api/deleteAll', (req, res) => {
    todos.splice(0, todos.length)
    res.send('All items are deleted')
})

app.listen(3042, () => {
    console.log('http://localhost:3042')
})