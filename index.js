const { error } = require("console");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    genre: "Magical realism",
    language: "Spanish",
  },
];

app.get("/api/books", (_req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const idBook = parseInt(req.params.id);
  const book = books.find((book) => book.id === idBook);
  if (!book) return res.status(404).json({ error: "Book not found." });
  res.json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author, genre, language } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required." });
  if (!author) return res.status(400).json({ error: "Author is required." });
  if (!genre) return res.status(400).json({ error: "Genre is required." });

  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    language: language || "",
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/api/books/:id", (req, res) => {
  const idBook = parseInt(req.params.id);
  const book = books.find((book) => book.id === idBook);
  if (!book) return res.status(404).json({ error: "Book not found." });

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  book.genre = req.body.genre || book.genre;
  book.language = req.body.language || book.language;
  res.json(book);
});
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
