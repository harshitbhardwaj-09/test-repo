import express from "express"
const app = express()

app.get("/", (req, res) => {
    res.send("Server is live")
})


app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})
