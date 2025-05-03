import express from "express";
import {
  checkSellerAuth,
  sellerLogin,
  sellerLogout,
} from "../controllers/sellerController.js";
import { authSeller } from "../middlewares/authSeller.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, checkSellerAuth);
sellerRouter.post("/logout", sellerLogout);

export default sellerRouter;
