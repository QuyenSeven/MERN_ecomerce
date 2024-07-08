const addToCartModel = require("../../models/cartProduct");

const countAddToCartProduct = async(req,res) =>{
    try{
        const userId = req.userId

        const count = await addToCartModel.countDocuments({
            userId: userId,
        })

        res.json({
            data: {
                count: count
            },
            message: "OK",
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

module.exports = countAddToCartProduct