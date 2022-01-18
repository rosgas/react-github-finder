const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

// Rate limiting

const limiter = rateLimit({
  windowsMs: 10 * 60 * 1000, //10 mins
  max: 50,
});

app.use(limiter);
app.set("trust proxy", 1);

//Set static folder
app.use(express.static("public"));

// Routes

app.use("/users", require("./routes/github"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
