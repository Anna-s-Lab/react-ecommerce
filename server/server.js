const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/authRoutes");

mongoose
  .connect(
    "mongodb+srv://denkerannentc0394:53gM3ntat10nF4ult.@cluster0.oiidw.mongodb.net/"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

// especify the origin, methods, headers allowed...
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser);
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log("Server running on port", PORT));
