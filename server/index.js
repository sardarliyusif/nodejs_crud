const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

let idCounter = 3;

let users = [
  { id: 1, name: "Yusif" },
  { id: 2, name: "Veli" },
  { id: 3, name: "Ali" },
];

const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get ALL USERS

app.get("/users", (req, res) => {
  res.send(users);
});

// ADD NEW USER

app.post("/users", (req, res) => {
  const newUser = {
    id: (idCounter += 1),
    name: req.body.name,
  };
  users.push(newUser);
  res.end();
});

// GET USER BY ID

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id == id);

  if (user) {
    res.send(user);
    res.status(200).json({ info: "Meni axtarirdin?" });
  } else {
    res.status(404).json({ info: "Sehv dusmusen birde yoxla" });
  }
});

// DELETE USER

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id != id);
  res.send(users);
  res.status(200).json({ message: "deleted" });
});

// UPDATE USER

app.put("/users/:id",(req,res)=>{
    const {id}=req.params

    users=users.filter(x=>x.id!=id)

    const updateUser={
        id:id,
        name:req.body.name,
    }
    users.push(updateUser)
    res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
