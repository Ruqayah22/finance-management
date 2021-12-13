const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const Routes = require("./routes/employeesRoute");

const app = express();

// app.get("/", function (req, res) {
//   res.send("Welcome");
// });

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Step 2 ------------------->
app.use("/employee", Routes);

const URL =
  "mongodb+srv://fianceMang:00000000@cluster0.i2lwe.mongodb.net/PROJECT 0?retryWrites=true&w=majority";

const PORT = process.env.PORT || "8080";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

// app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
