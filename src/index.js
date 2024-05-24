require("dotenv").config({path: "./env"})
const { app } = require("./app");
const connectDB = require("./db/index")

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB Connection Failed !!`, err);
})

