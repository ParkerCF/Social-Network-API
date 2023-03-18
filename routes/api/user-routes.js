const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");

const {
  addFriend,
  deleteFriend,
} = require("../../controllers/friendController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;