import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import session from "express-session";
import { client } from "./repository/database.mjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { header } from "./components/header.mjs";
import { footer } from "./components/footer.mjs";

import contactRouter from "./routes/contact.mjs";

// Following lines makes it so __dirname still works within ECMA - seems weird though that they didnt make it apart of ECMA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));

app.use(helmet());

const baseLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const mailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per windowMs
});

app.use(baseLimiter);
app.use("/contact/*", mailLimiter);

app.use(contactRouter);

/*
app.use(session({
    secret: 'keyboard cat',
    resave: false,                      Figure out how to do this properly
    saveUninitialized: true,
    cookie: { secure: false }
}));
*/

const index = fs.readFileSync(__dirname + "/public/index/index.html", "utf8");
const notfound = fs.readFileSync(
  __dirname + "/public/errorpage/notfound.html",
  "utf8"
);
const projects = fs.readFileSync(
  __dirname + "/public/projects/projects.html",
  "utf8"
);
const contact = fs.readFileSync(
  __dirname + "/public/contact/contact.html",
  "utf8"
);
const about = fs.readFileSync(__dirname + "/public/about/about.html", "utf8");

app.get("/", (req, res) => {
  res.send(header + index + footer);
});

app.get("/projects", (req, res) => {
  res.send(header + projects + footer);
});

app.get("/contact", (req, res) => {
  res.send(header + contact + footer);
});

app.get("/about", (req, res) => {
  res.send(header + about + footer);
});

app.get("/*", (req, res) => {
  res.send(header + notfound + footer);
});

app.listen(8080, (error) => {
  if (error) {
    console.log("error encountered ", error);
  }
  console.log("server is running on port ", 8080);
});
