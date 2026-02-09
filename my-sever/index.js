const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Mock Database
let database = [
  {
    id: "1",
    Tensach: "Tin Học Cơ Bản Windows XP",
    Giaban: 26000,
    Mota: "Nội dung của cuốn Tin Học Cơ Bản Windows XP gồm có 7 chương...",
    Anhbia: "TH03.jpg",
    Ngaycapnhat: "25/10/2014",
    Soluongton: 120,
    MaCD: 7,
    MaNXB: 1
  },
  {
    id: "2",
    Tensach: "Giáo trình Tin học cơ bản",
    Giaban: 12000,
    Mota: "Cuốn sách này gồm 3 phần sau: Phần 1: Xử lý văn bản...",
    Anhbia: "TH04.jpg",
    Ngaycapnhat: "23/10/2013",
    Soluongton: 25,
    MaCD: 3,
    MaNXB: 2
  },
  {
    id: "3",
    Tensach: "Visual Basic 2005 Tập 3",
    Giaban: 20000,
    Mota: "Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu...",
    Anhbia: "LTWeb2005.jpg",
    Ngaycapnhat: "15/09/2014",
    Soluongton: 240,
    MaCD: 8,
    MaNXB: 4
  }
];

// Routes

// GET all books
app.get("/books", (req, res) => {
  res.json(database);
});

// GET book by id
app.get("/books/:id", (req, res) => {
  const book = database.find(b => b.id === req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// POST new book
app.post("/books", (req, res) => {
  const newBook = req.body;
  // Simple ID generation
  newBook.id = (Date.now()).toString(); 
  database.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const index = database.findIndex(b => b.id === req.params.id);
  if (index !== -1) {
    database[index] = { ...database[index], ...req.body, id: req.params.id };
    res.json(database[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const index = database.findIndex(b => b.id === req.params.id);
  if (index !== -1) {
    const deletedBook = database.splice(index, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Book API");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
