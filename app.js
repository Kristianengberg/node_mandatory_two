import express from "express";
const app = express();






app.get("/", (req, res) => {
    res.send({});
});




app.listen(8080, (error) => {
    if (error) {
        console.log("error encountered ", error);
    }
    console.log("server is running on port ", 8080);
});