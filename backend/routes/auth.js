const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");


//Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_KEY).toString()
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});

//Login
router.post('/login', async (req, res) => {

    try{
        const user = await User.findOne({username: req.body.username});
        if(!user)
            res.status(401).json("Zła nazwa użytkownika lub hasło");

        const encPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTOJS_KEY);
        const decPassword = encPassword.toString(CryptoJS.enc.Utf8);
        if(decPassword !== req.body.password)
            res.status(401).json("Zła nazwa użytkownika lub hasło");

        const { password, ...other} = user._doc;
        res.status(200).json(other);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;