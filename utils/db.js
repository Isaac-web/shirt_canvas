import mongoose from "mongoose";

const MONGO_DB_URI = "mongodb://0.0.0.0/shirt_canvas";

let isConnected = false;

export const connectToDb = () => {
  if (isConnected) return;

  mongoose.set("strictQuery", true);
  mongoose
    .connect(MONGO_DB_URI, {
      dbName: "shirt_canvas",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      isConnected = true;
      console.log(`Connected to ${MONGO_DB_URI}...`);
    })
    .catch((err) =>
      console.error(
        "Something went wrong while connecting to the database.",
        err
      )
    );
};
