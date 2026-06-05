const jwt = require("jsonwebtoken");

const authAdmin = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.ACCESS_JWT_SECRET
        );

        req.admin = decoded._id;

        next();

    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token"
        });

    }
};

module.exports = authAdmin;