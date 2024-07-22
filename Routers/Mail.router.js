import express from "express";
import { sendmail } from "../Controllers/Mail.controller.js";

const router = express.Router();

router.get("/sendmail", sendmail);

export default router;