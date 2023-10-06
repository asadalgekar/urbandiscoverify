import express from "express";
import ejs from 'ejs';
import path from 'path'; // Import path module to handle paths

const app = express(); // Initialize Express app

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 5050;

app.get("/home", (req, res) => {
    res.render("index.ejs");
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});