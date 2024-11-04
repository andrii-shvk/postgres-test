const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const dbPool = require("./db.js");
dotenv.config();

const PORT = process.env.PORT || 8001;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/api", postRouter);

dbPool
    .connect()
    .then(() => console.log("Connected to the database!"))
    .catch((err) => console.error("Connection error", err.stack));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
