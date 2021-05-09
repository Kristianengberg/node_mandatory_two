import express from "express";
const router = express.Router();
import { returnJson } from "../repository/database.mjs";


router.get("/api/projects", (req, res) => {
    res.send({ returnJson });
});

export default router;