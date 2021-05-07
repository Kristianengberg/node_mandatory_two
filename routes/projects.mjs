import express from "express";
const router = express.Router();


router.post("/api/projects", (req, res) => {
    res.redirect("/");
});

export default router;