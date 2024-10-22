import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

dotenv.config();

connectDB();
const app = express();

app.use(cors());

app.use(
  cors({
    origin: "https://ecommercehtlogistic.netlify.app", // Replace this with your Netlify URL
    credentials: true, // Enable this if you are using cookies or authorization headers
  })
);

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>  Welcome to our  E commerce app </h1>");
});

const PORT = process.env.PORT || 5500;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
