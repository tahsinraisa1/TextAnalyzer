import express from "express";
import { addText, getTextList, getTextMeta } from "./controllers/text";
import { signUp, signIn } from "./controllers/user";
import { authenticateJWT } from "./middlewares/auth";
import { cacheEndpoint } from "./middlewares/cache";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/text/:id/:type", authenticateJWT, cacheEndpoint, getTextMeta);
router.get("/texts", authenticateJWT, getTextList);
router.post("/text", authenticateJWT, addText);

export default router;
