const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    language: "Spanish",
  },
];

app.get("/api/books", (_req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  let idBook = parseInt(req.params.id);
  let book = books.find((book) => (book.id = idBook));
  if (!book) return res.status(404).json({ error: "Book not found." });
  res.json(book);
});

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
