const productModel = require("../../models/productModel");

 const getCategoryProduct = async(req,res) =>{
    try{
        const productCategory = await productModel.distinct("category")

        //array to store one product from each category
        const productByCategory = []

        for(const category of productCategory){
            const product = await productModel.findOne({category})

            if(product){
                productByCategory.push(product)
            }
        }


        res.json({
            message: "Category product",
            data: productByCategory,
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

 module.exports = getCategoryProduct