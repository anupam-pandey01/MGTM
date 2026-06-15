const statsRouter = require("express").Router()
const { getMetrics, updateMetrics } = require("../controllers/metricsController.js");
const { getStatsHomePage } = require("../controllers/servicesControllers.js");
const authAdmin = require("../middleware/authAdmin.js");



statsRouter.get("/metrics", getMetrics);
statsRouter.patch("/metrics", authAdmin, updateMetrics);
statsRouter.get("/home-page-stats", getStatsHomePage);


module.exports = statsRouter;