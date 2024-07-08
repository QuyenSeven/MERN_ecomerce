const addToCartModel = require("../../models/cartProduct");

const upadteAddToCartProduct = async(req,res) =>{
    try{
        const currentUserId = req.userId
        const  addToCartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await addToCartModel.updateOne({_id: addToCartProductId},{
           ...(qty && {quantity: qty})
        })

        res.json({
            data: updateProduct,
            message: "Product updated",
            success: true,
            error: false
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

module.exports = upadteAddToCartProduct