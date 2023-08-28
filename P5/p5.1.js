const express = require('express');
const app = express;
const port = 3000;

app.use(express.json());
app.use(express.urlencoded( {extended : true} ));

var users = [];

app.post('/user', (req,res) => {
    const { id, name , age , gender } = req.body;
    if(!id ||!name || !age || !gender){
        return res.status(400).json("Data not entered properly");
    }

    const newData = {id , name , age , gender};
    users.push(newData);
    res.status(200).json(data);
});

app.get('/user',(req,res) => {
    res.status(200).json(users);
})

app.get('/user/:id', (req,res) => {
    const idy = req.params.id;
    const data = users.find((x) => x.id == idy);
    if(!data){
        return res.status(404).json("User not found");
    }
    res.status(200).json(data);
});

app.put('/user/:id', (req, res) => { 
    const idy = req.params.id; const { newName} = req.body;
    if (!newName) { 
        return res.status(400).json("Enter a valid new Name.");
    }
    const userIndex = users.findIndex((x) => x.id === idy);
    if (userIndex === -1) {
        return res.status(484).json("User not found");
    }
    users [userIndex].name = newName;
    res.status(200).json("Username updated successfully");
});

app.delete('/user/:id', (req, res) => {
    const idy = req.params.id;
    const userIndex = users.findIndex((x) => x.id === idy);
    if (userIndex === -1) {
        return res.status (484).json("User not found");
    }
    users.splice(userIndex, 1);
    res.status(208).json("User deleted successfully");
});

    app.listen(port, () => {
    console.log("Server is running on port no. ${port}");
});