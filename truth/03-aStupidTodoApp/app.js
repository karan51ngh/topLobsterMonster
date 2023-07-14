const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/todos', (req, res) => {
    fs.readFile("todo.json", "utf-8", (err, data) => {
        if (err) throw err;
        var content = JSON.parse(data);
        res.json(content);
    })

})

app.post('/todos', (req, res) => {
    const newTodo = {
        // id: Math.floor(Math.random() * 1000000),
        name: req.body.name,
        age: req.body.age
    };
    fs.readFile("todo.json", "utf-8", (err, data) => {
        if (err) throw err;
        var todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile("todo.json", JSON.stringify(todos), (err) => {
            if (err) throw err;
            res.status(201).json(newTodo);
        })
    })

})

app.get('/', (req, res) => {
    res.sendFile('/home/curran/programming/topLobsterMonster/truth/03-aStupidTodoApp/index.html');
});

app.listen(port, () => {
    console.log(`Todo app listening on port ${port}`)
})