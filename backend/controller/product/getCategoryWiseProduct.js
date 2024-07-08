const productModel = require("../../models/productModel");

const getCategoryWiseProduct = async (req, res) => {
  try {
    const {category} = req?.body || req?.query
    const product = await productModel.find({ category });

    res.json({
        data: product,
        message: "Product ",
        success: true,
        error: false
    })
  } catch (e) {
    res.status(400).json({
      message: e.message || e,
      error: true,
      success: false,
    });
  }
};

module.exports = getCategoryWiseProduct
