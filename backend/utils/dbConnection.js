import mongoose from "mongoose";

export default function connect() {
    const connectionUrl = process.env.MONGODB_URL;
    mongoose.connect(connectionUrl, {})
        .then(() => console.log("Database connected"))
        .catch((error) => {
            console.log("Database connection failed, exiting now..", error);
            process.exit(1);
        })
}