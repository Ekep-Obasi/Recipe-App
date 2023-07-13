const express = require("express");
const {
  getAllReplies,
  getOneReply,
  createReply,
  patchReply,
  deleteReply,
  putReply,
} = require("../controllers/ReplyController");
const router = express.Router();

router.get("/", getAllReplies);
router.get("/:id", getOneReply);
router.post("/", createReply);
router.patch("/:id", patchReply);
router.put("/:id", putReply);
router.delete("/:id", deleteReply);

module.exports = router;
