const Product = require("../models/Product");
const { verifyAdmin } = require("./verify");
const router = require ("express").Router();


//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const queryNew = req.query.new;  // ?new=true
    const queryCategory = req.query.category; // ?category=nazwa
    const queryName = req.query.name //?name=nazwa
    const querySubCategory = req.query.subcategory //?subcategory=nazwa

    try{
        let products;
        if(queryNew){
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        }else if(queryCategory){
            if(querySubCategory)
            products = await Product.find({category: { $in: [queryCategory] } }).find({subcategory: { $in: [querySubCategory] } });
            else
            products = await Product.find({category: { $in: [queryCategory] } })
        }else if(queryName){
            products = await Product.find({name: { '$regex' : queryName, '$options' : 'i' } });
        }else{
            products = await Product.find();
        }
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err)
    }
});

//GET PRODUCT
router.get("/:id", async (req, res) => {
    try{
        const getProduct = await Product.findById(req.params.id);
        res.status(200).json(getProduct);
    }catch(err){
        res.status(500).json(err)
    }
});

//CREATE
router.post("/", verifyAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try{
        const saveNewProduct = await newProduct.save();
        res.status(200).json(saveNewProduct);
    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verifyAdmin, async (req, res) => {
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json(updateProduct);
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", verifyAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Produkt usunięty");
    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE STOCK
router.put("/stock/:id", async (req, res) => {
    try{
        await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json("Produkt zaktualizowany");
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;