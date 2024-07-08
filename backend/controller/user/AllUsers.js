const userModel = require("../../models/userModel");

async function allUsersController(req, res) {
  try {

    const allUsers = await userModel.find()

    res.json({
      message: "All Users",
      data: allUsers,
      success: true,
      error: false
    });
  } catch (e) {
    res.status(400).json({
      message: e.message || e,
      error: true,
      success: false,
    });
  }
}

module.exports = allUsersController;
