import express from "express";
import { GetMsg, PostCTRL } from "../controllers/userCtrl.js";
const router = express.Router();

router.get('/users', GetMsg);
router.post('/users/post', PostCTRL);

export default router;