const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");
const petRoutes = require("./routes/petRoutes");
const adoptionRequestRoutes = require("./routes/adoptionRequestRoutes");

dotenv.config();

require("./config/connectDb");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Welcome to the get-pet server api",
  });
});

app.use("/users", userRoutes);
app.use("/pets", petRoutes);
app.use("/adoptionRequests", adoptionRequestRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});