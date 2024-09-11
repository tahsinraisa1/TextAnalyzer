import express from "express";
import { getTextMeta } from "./controllers/text";

const router = express.Router();

router.get("/text/:id/words", getTextMeta);
router.get("/text/:id/chars", getTextMeta);
router.get("/text/:id/sentences", getTextMeta);
router.get("/text/:id/paragraphs", getTextMeta);
router.get("/text/:id/longest-word", getTextMeta);

export default router;
