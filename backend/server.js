const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(morgan("dev"));

app.get("*", (req, res) => {
   res.status(401)
      .send("Page not found")
})

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}...`)
})