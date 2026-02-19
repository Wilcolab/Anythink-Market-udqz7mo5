const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

//Hey GitHub Copilot, I want to create a route that allows users to post comments on a specific post. The route should be a POST request to /api/comments/:postId, where :postId is the ID of the post the comment is associated with. The request body should contain the comment text and the user ID of the commenter. The route should save the comment to the database and return the saved comment as a response.

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
        } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }});

    // add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }





                                