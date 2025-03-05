import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
    origin: true,
    credentials: true,
};
// const corsOptions = {
//     origin: [
//         "http://localhost:3000",
//         "https://transcendent-sundae-2bb9db.netlify.app",
//     ], // Allow local dev and deployed frontend
//     credentials: true, // Allow cookies and credentials
// };
// // Allow frontend at localhost:3000
// app.use(cors(corsOptions));


// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDb database Connected");
    } catch (err) {
        console.log("MongoDb Database Connection Failed");
    }
};

// middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
    connect();
    console.log(`Server is Listening on port ${port}`);
});
