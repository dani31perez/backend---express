const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    language: "Español",
  }
];

app.get("api/books", (_req, res) => {
    res.json(books);
});  

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
