async function userLogout(req, res) {
  try {
    res.clearCookie("token");

    res.json({
      message: "Logouted successfully",
      error: false,
      success: true,
      data: [],
    });
  } catch (e) {
    res.json({
      message: e.message || e,
      error: true,
      success: false,
    });
  }
}

module.exports = userLogout;
