const { Thought } = require("../models");

module.exports = {
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $pull: {
          reactions: { reactionId: req.params.reactionId },
        },
      },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought or reaction found with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};