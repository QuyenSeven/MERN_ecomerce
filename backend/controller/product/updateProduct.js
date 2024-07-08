const uploadProductPermission = require("../../helper/permission");
const productModel = require("../../models/productModel");

async function updateProductController  (req,res) {
    try{
        if(!uploadProductPermission(req.userId)){
            throw new Error("Pemission denied")
        }

        const {_id,...resBody} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(_id,resBody)

        res.json({
            message: "Product update successfully",
            data: updateProduct,
            success: true,
            error: false
        })
      
    }
    catch (e) {
        res.status(400).json({
          message: e.message || e,
          error: true,
          success: false,
        });
      }
}

module.exports = updateProductController