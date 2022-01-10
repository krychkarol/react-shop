const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if(err) {
                res.status(403).json("Token jest nieprawidłowy")
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("Nie jesteś uwierzytelniony");
    }
};

const verifyAuthorization = (req, res, next) =>{
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("Nie masz pozwolenia");
        }
    })
};

const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next();
        }else{ 
            res.status(403).json("Nie masz pozwolenia");
        }
    })
};

module.exports = { verifyToken, verifyAuthorization, verifyAdmin };