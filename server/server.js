// import libraries

const express = require("express");
const cors = require("cors");
const app = express();
const campingRoutes = require("./routes/camping");

// middleware
app.use(cors()); // Stuck wai gon
app.use(express.json());

// Method GET, POST, PUT, PATCH, DELETE

app.use("/api", campingRoutes);

// app.get("/", (req, res) => {
//   // code body
//   res.json({ message: "Hello," });
// });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
