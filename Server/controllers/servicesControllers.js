const metrics = require("../models/metrics");
const Product = require("../models/product");
const Service = require("../models/service");

const getServices = async (req, res) => {
  try {

    const services = await Service.find({
      isActive: true,
    }).sort({ order: 1 }).select("-heroSection");

    res.status(200).json({
      success: true,
      services,
    });

  } catch (err) {
    console.error(err)
    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

const getServicesPageDetail = async(req, res)=>{
  try{
    const { slug } = req.params;
    const service = await Service.findOne({
      slug , 
      isActive: true
    }).select("heroSection");

    if(!service){
      return res.status(404).json({
        success: false,
        message: "Services not found"
      })
    }

     const products = await Product.find({
      service: service._id,
      isActive: true,
    });

    res.status(200).json({
      success: true,
      service,
      products,
    });

    res.status(200).json(service);

  }catch(err){
    console.log(err)
  }
}

const getStatsHomePage = async(req, res)=>{
  try{
    const data = await metrics.findOne();

    const statsService = {
      streamSelection: 0,
      careerCoaching: 0,
      studyAbroad: 0
    }

    statsService.streamSelection += (data.ignite_enrollment + data.propel_enrollment + data.accelerate_enrollment);
    statsService.careerCoaching += (data.career_ignite_enrollment + data.career_propel_enrollment + data.career_accelerate_enrollment + data.career_captains_enrollment);
    statsService.studyAbroad += data.abroad_enrolled

    res.status(200).json(statsService);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: "Something went worong", success: false})
  }
}

module.exports = {
  getServices,
  getServicesPageDetail,
  getStatsHomePage,
};