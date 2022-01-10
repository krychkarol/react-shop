const Category = require("../models/Category");
const { verifyAdmin } = require("./verify");
const router = require ("express").Router();

//GET ALL CATEGORIES
router.get("/", async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET CATEGORY
router.get("/:id", async (req, res) => {
    try{
        const getCategory = await Category.findById(req.params.id);
        res.status(200).json(getCategory);
    }catch(err){
        res.status(500).json(err);
    }
});

//CREATE
router.post("/", verifyAdmin, async (req, res) => {
    const newCategory = new Category(req.body);
    try{
        const saveNewCategory = await newCategory.save();
        res.status(200).json(saveNewCategory);
    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verifyAdmin, async (req, res) => {
    try{
        const updateCategory = await Category.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json(updateCategory);
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", verifyAdmin, async (req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json("Kategoria usunięta");
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;