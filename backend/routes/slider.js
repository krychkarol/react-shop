const Slider = require("../models/Slider");
const { verifyAdmin } = require("./verify");
const router = require ("express").Router();

//GET ALL SLIDES
router.get("/", async (req, res) => {
    try {
      const slides = await Slider.find();
      res.status(200).json(slides);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET SLIDE
router.get("/:id", async (req, res) => {
    try{
        const getSlide = await Slider.findById(req.params.id);
        res.status(200).json(getSlide);
    }catch(err){
        res.status(500).json(err);
    }
});

//CREATE
router.post("/", verifyAdmin, async (req, res) => {
    const newSlide = new Slider(req.body);
    try{
        const saveNewSlide = await newSlide.save();
        res.status(200).json(saveNewSlide);
    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verifyAdmin, async (req, res) => {
    try{
        const updateSlide = await Slider.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json(updateSlide);
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", verifyAdmin, async (req, res) => {
    try{
        await Slider.findByIdAndDelete(req.params.id);
        res.status(200).json("Slajd usunięty");
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;