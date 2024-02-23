import express from "express";
import {
  createNote,
  deleteNote,
  notes,
  showNote,
  updateNote,
} from "../apiService/notes/controller.js";
const router = express.Router();

// endpoint from api Notas
router.get("/notes", notes);
router.get("/showNote/:id", showNote);
router.post("/create", createNote);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

export default router;
