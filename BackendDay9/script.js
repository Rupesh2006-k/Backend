/** @format */

const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Example route to trigger an error
app.get("/error", (req, res, next) => {
  next(new Error('Sorry, error aa gaya 😅'));
});

// Error-handling middleware (keep at the end)
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
