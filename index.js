const express = require("express");
const app = new express();
app.use(express.json());

const courses = [
  { id: 1, name: "course" },
  { id: 2, name: "course1" },
  { id: 3, name: "course2" },
  { id: 4, name: "course3" }
];

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/newUser", (req, res) => {
  res.send(courses);
});
app.get("/api/post/:id/", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("not avaliable");
  res.send(course);
});

app.post("/api/newUser", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(courses);
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
