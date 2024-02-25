import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "./src/.env"});

export const authenticateToken = (req, res, next) => {

    try {
        const {token} = req.cookies;

        if(!token) return res.status(401).json({message: "No token, authorization denied"});

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).json({message: "Token is not valid"});

            req.user = user;

            next();
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}