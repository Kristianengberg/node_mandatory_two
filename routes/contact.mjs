import express from "express";
const router = express.Router();
import { mailOptions, sendMail } from "../util/mailer.mjs";

router.post("/api/contact", (req, res) => {
    mailOptions.from = req.body.emailaddress;
    mailOptions.text = "mail from: " + req.body.emailaddress + "\n" + req.body.subject;
    sendMail(mailOptions);
    res.redirect("/");
});

export default router;