const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailController = require("../controller/user/userDetail");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/user/userLogout");
const allUsersController = require("../controller/user/AllUsers");
const updateUserController = require("../controller/user/updateUser");
const uploadProductController = require("../controller/product/uploadProducts");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetail = require("../controller/product/getProductDetail");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const upadteAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProduct = require("../controller/product/filterProduct");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailController);
router.get("/userLogout", userLogout);

// Admin panel

router.get("/all-users", authToken, allUsersController);
router.post("/update-user", authToken, updateUserController);

// Product

router.post("/upload-product", authToken, uploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetail)
router.get('/search',searchProduct)
router.post("/filter-product", filterProduct)

// User add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-cart-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,upadteAddToCartProduct)
router.post('/delete-cart-product',authToken,deleteAddToCartProduct)



module.exports = router;
