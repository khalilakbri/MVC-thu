import express from "express"
import { index, create } from "../controllers/EmployeeController.js"

const router = express.Router()

router.get("/",index)
router.get("/create",create)

export default router