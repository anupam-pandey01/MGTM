const { getServices, getServicesPageDetail } = require("../controllers/servicesControllers")

const servicesRouter = require("express").Router()

servicesRouter.get("/services", getServices);
servicesRouter.get("/services/:slug", getServicesPageDetail);

module.exports = servicesRouter