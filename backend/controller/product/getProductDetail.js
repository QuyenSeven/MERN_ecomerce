const productModel = require("../../models/productModel");

const getProductDetail = async(req,res) =>{
    try{
        const {productId} = req.body

        const product = await productModel.findById(productId)

        res.json({
            data : product,
            message: "Ok",
            success: true,
            error: false
        })
    }
    catch (e) {
        res.json({
          message: e?.message || e,
          error: true,
          success: false,
        });
      }
}

module.exports = getProductDetail