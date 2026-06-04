import express from "express"
import { index, find } from "../controllers/ProductController.js"

const router = express.Router()

router.get("/",index)
router.get("/:id",find)

export default router