import express from "express";
import { allCryptos, getCriptoByid } from "../controller/cryptos.controller";
const router = express.Router();

router.get("/cryptos", allCryptos);
router.get("/cryptos/:id", getCriptoByid);
export default router;
