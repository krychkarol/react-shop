const User = require("../models/User");
const { verifyAdmin, verifyAuthorization } = require("./verify");
const router = require ("express").Router();


//GET ALL USERS
router.get("/", verifyAdmin, async (req, res) => {
    try{
        const getAllUsers = await User.find();
        res.status(200).json(getAllUsers);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET USER
router.get("/:id", verifyAdmin, async (req, res) => {
    try{
        const getUser = await User.findById(req.params.id);
        const { password, ...other} = getUser._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyAuthorization, async (req, res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_KEY).toString();
    };

    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json(updateUser);
    }catch(err){
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyAuthorization, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Użytkownik usunięty");
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;