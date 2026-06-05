const jwt = require("jsonwebtoken");

function generateAccessToken(user){
    return jwt.sign(
        { userId: user._id },
        process.env.ACCESS_JWT_SECRET, 
        { expiresIn: "15m"}
    )
}

function generateRefreshToken(user){
    return jwt.sign(
        { userId: user._id },
        process.env.REFRESH_JWT_SECRET, 
        { expiresIn: "7d"}
    )
}

module.exports = { generateAccessToken, generateRefreshToken };