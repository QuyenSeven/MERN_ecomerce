const uploadProductPermission = require("../../helper/permission");
const productModel = require("../../models/productModel");

async function uploadProductController(req,res){
    try{

            const sessionUserId = req.userId

            if(!uploadProductPermission (sessionUserId)){
                throw new Error("Pemission denied")
            }

        const uploadProduct = await productModel(req.body)
        const saveProduct = await uploadProduct.save()

        res.status(201).json({
            message: "Product upload successfully",
            error: false,
            success: true,
            data : saveProduct
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

module.exports = uploadProductController