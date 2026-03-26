const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

module.exports = function (req, res, next) {
    const rawToken = req.headers.authorization;
    if (!rawToken) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        console.log("Raw token:", rawToken);
        const decToken = jwt.verify(rawToken.split(" ")[1], SECRET_KEY);
        req.user = decToken;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Not authorized." });
    }
};