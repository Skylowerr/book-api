# 📚 Book API

A RESTful API built with Node.js, Express, and MongoDB for managing a book collection.

## 🚀 Features

- Create, Read, Update, Delete (CRUD) operations for books
- MongoDB integration with Mongoose
- Duplicate book detection
- Environment variable support with dotenv

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Book-Api/
  config/
    dbConnect.js      # MongoDB connection
  models/
    Book.js           # Book schema & model
  routes/
    booksRouter.js    # Book routes
  .env                # Environment variables (not pushed)
  .env.example        # Environment variable template
  .gitignore
  package.json
  server.js           # Entry point
```

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/Skylowerr/book-api.git
cd book-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in the root directory
```bash
cp .env.example .env
```

4. Add your MongoDB connection string to `.env`
```
MONGO_URI=mongodb+srv://username:password@cluster...
PORT=3000
```

5. Start the server
```bash
npm start
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/books` | Get all books |
| GET | `/api/v1/books/:id` | Get a single book |
| POST | `/api/v1/books` | Create a new book |
| PUT | `/api/v1/books/:id` | Update a book |
| DELETE | `/api/v1/books/:id` | Delete a book |

## 📖 Example Request

**POST** `/api/v1/books`
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "publishedYear": 1925,
  "isAvailable": true
}
```

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Server port (default: 3000) |
