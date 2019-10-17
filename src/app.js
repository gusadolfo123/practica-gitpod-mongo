const express = require('express');
const app = express();
const Task = require('./models/task')

// Middlewares
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index', { tasks });
});

app.post('/create', async (req, res) => {
    const { task, description } = req.body;
    const newTask = new Task({ task, description });
    await newTask.save();
    res.redirect('/');
});

//STATIC FILES
app.use(express.static(__dirname + '/public'));

module.exports = app;