const statsRouter = require("express").Router()
const { getMetrics, updateMetrics } = require("../controllers/metricsController.js");
const authAdmin = require("../middleware/authAdmin.js");



statsRouter.get("/metrics", getMetrics);

statsRouter.patch("/metrics", authAdmin, updateMetrics);

module.exports = statsRouter;