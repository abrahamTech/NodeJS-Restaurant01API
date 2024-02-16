import express from "express";

const app = express();

//Settings
app.set("port", 3000)


app.listen(app.get("port"), () => {
    console.log(`Server listen on port ${app.get("port")}`);
})