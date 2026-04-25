const express = require('express');
const app = express();
app.use(express.json());

const port = 5050;


const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob",   email: "bob@example.com" },
];

app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
   const id = parseInt(req.params.id);
   const user = users.find(u => u.id === id);

    if (!user) {
        res.status(404).json({error: "User not found"});
    }

    res.status(200).json(user);
});


app.post('/new-user', (req, res) => {
    const {name, email} = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are requied"
        });
    }

    // create new user object
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };

    users.push(newUser);

    // created status
    res.status(201).json(newUser);
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})