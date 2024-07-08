const productModel = require("../../models/productModel");

const getProductController = async (req, res) => {
  try {
    const allProduct = await productModel.find().sort({ createAt: -1 });

    res.json({
      message: "All product ",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message || e,
      error: true,
      success: false,
    });
  }
};

module.exports = getProductController;
