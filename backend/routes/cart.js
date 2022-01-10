const Cart = require("../models/Cart");
const { verifyToken, verifyAdmin, verifyAuthorization } = require("./verify");
const router = require ("express").Router();

//GET ALL CARTS
router.get("/", verifyAdmin, async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET USER CARTS
router.get("/:id", verifyAuthorization, async (req, res) => {
    try{
        const getCart = await Cart.find({userId: req.params.id});
        res.status(200).json(getCart);
    }catch(err){
        res.status(500).json(err)
    }
});

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try{
        const saveNewCart = await newCart.save();
        res.status(200).json(saveNewCart);
    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verifyAuthorization, async (req, res) => {
    try{
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json(updateCart);
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", verifyAuthorization, async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Koszyk usunięty");
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;