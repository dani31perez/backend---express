# Books API

This is a simple REST API for managing books using Express.js.

## 📌 Requirements
- Node.js (Download from [nodejs.org](https://nodejs.org/))
- npm (included with Node.js)
- Postman (optional, for testing requests)

## 🚀 Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/dani31perez/backend---express.git
   cd backend--express
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node server.js
   ```
   Or using `nodemon` (if installed):
   ```sh
   nodemon server.js
   ```

4. The server will be running on:
   ```sh
   http://localhost:3000
   ```

## 📌 API Endpoints

### 📖 Get all books
```http
GET /api/books
```
Response:
```json
[
    {
        "id": 1,
        "title": "Cien años de soledad",
        "author": "Gabriel García Márquez",
        "genre": "Magical realism",
        "language": "Spanish"
    }
]
```

### 📖 Get a book by ID
```http
GET /api/books/:id
```
Example:
```http
GET /api/books/1
```

### 📖 Add a new book
```http
POST /api/books
```
Request body:
```json
{
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Southern Gothic, Bildungsroman",
    "language": "English"
}
```

### 📖 Update a book by ID
```http
PUT /api/books/:id
```
Example:
```http
PUT /api/books/1
```
Request body:
```json
{
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian, Political fiction, Social science fiction",
    "language": "English"
}
```

### 📖 Delete a book by ID
```http
DELETE /api/books/:id
```
Example:
```http
DELETE /api/books/1
```

## 📌 Importing the Postman Collection
To test the API using **Postman**, import the `Api Collection.postman_collection.json` file:

1. Open Postman.
2. Go to **File > Import**.
3. Select `Api Collection.postman_collection.json`.
4. Use the predefined requests to test the API.

---

## 📌 License
This project is licensed under the MIT License.

You can preview the project using my CodeSandbox link: https://codesandbox.io/p/devbox/ppz337

