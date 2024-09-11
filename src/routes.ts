import express from "express";
import { getTextMeta } from "./controllers/text";
import { signUp, signIn } from "./controllers/user";
import { authenticateJWT } from "./middlewares/auth";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/text/:id/:type", authenticateJWT, getTextMeta);

export default router;
