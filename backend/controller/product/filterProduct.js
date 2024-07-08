const productModel = require("../../models/productModel");

const filterProduct = async(req,res) =>{
    try {
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category: {
                "$in" : categoryList
            }
        })

        res.json({
            data: product,
            message: " Category List",
            error: false,
            success: true
        })
    }
    catch (e) {
        res.json({
          message: e.message || e,
          error: true,
          success: false,
        });
      }
}

module.exports = filterProduct