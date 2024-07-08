const addToCartModel = require("../../models/cartProduct")

const addToCartController = async(req,res) =>{
    try{
        const {productId} = req?.body

        const currentUser = req.userId

        const isProductAvailable = await addToCartModel.findOne({productId: productId})

        if(isProductAvailable){
            return res.json({
                message: "Already exits in Add to cart ",
                success: false,
                error: true
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()

        res.json({
            data: saveProduct,
            message: "Product added",
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

module.exports = addToCartController