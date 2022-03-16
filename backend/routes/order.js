const Order = require("../models/Order");
const { verifyAdmin } = require("./verify");
const router = require ("express").Router();


//GET ALL ORDERS
router.get("/", verifyAdmin, async (req, res) => {
    try {
        const getAllOrders = await Order.find();
        res.status(200).json(getAllOrders);
    }catch (err) {
        res.status(500).json(err);
    }
});

//GET USER ORDERS
router.get("/:id", verifyAdmin, async (req, res) => {
    try{
        const getOrders = await Order.find({userId: req.params.id});
        res.status(200).json(getOrders);
    }catch(err){
        res.status(500).json(err)
    }
});


//CREATE
router.post("/", async (req, res) => {
    const newOrder = new Order(req.body);
    try{
        const saveNewOrder = await newOrder.save();
        res.status(200).json(saveNewOrder);
    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verifyAdmin, async (req, res) => {
    try{
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json(updateOrder);
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", verifyAdmin, async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Zamówienie usunięte");
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;