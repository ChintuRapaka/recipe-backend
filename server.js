import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const __dirname = path.resolve(path.dirname('')); 

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("<h2>Hello</h2>");
});

app.listen(process.env.PORT || 5000, () => console.log("Server is up and running @ http://localhost:5000"));