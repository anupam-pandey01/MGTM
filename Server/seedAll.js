require("dotenv").config();

const connectDB = require("./config/db");
const Service = require("./models/Service");
const Product = require("./models/Product");

const services = [
  {
    title: "Stream Selection (for Class 8 & 9)",

    slug: "career-coaching-8-9",

    body:
      "Early, low-pressure self-discovery. A 4-dimensional stream assessment, career content and optional 1:1 counselling — built to help students explore before they commit.",

    icon: "Compass",

    heroSection: {
      eyebrow: "Stream Selection · Class 8 & 9",

      heading: "Early exploration, before the pressure of decisions.",

      description:
        "Class 8 & 9 is the right time to build self-awareness — not to lock in a career. Our four products move from a free orientation to a fully-mentored exploration, all anchored in a 4-dimensional psychometric assessment.",

    },
  },

  {
    title: "Career Coaching (for Class 10, 11 & 12)",

    slug: "career-coaching-10-12",

    body:
      "Decision-stage coaching. A 5-dimensional career assessment, a detailed 34-page report, certified counsellors and a dedicated mentor track for sustained support.",

    icon: "Users",

    heroSection: {
      eyebrow: "Career Coaching · Class 10, 11 & 12",

      heading: "The decision stage deserves more than a brochure.",

      description:
        "From subject choices to college pathways, Class 10–12 is when career conversations get real. Our four products move from a free orientation to a year-long mentor relationship — all anchored in a 5-dimensional psychometric assessment.",

    },

  },

  {
    title: "End-to-End Study Abroad",

    slug: "study-abroad",

    body:
      "University research and shortlisting, application strategy, SOPs and essays, scholarship guidance, visa preparation and pre-departure support — handled in one place.",

    icon: "BookOpenCheck",

    ctaLabel: "Explore the Track",

    heroSection: {
      eyebrow: "🌍 Study Abroad with MGTM",

      heading: "Guiding Growth, Not Selling Dreams.",

      description:
        "Studying abroad is one of the biggest decisions a student makes — academically, financially, emotionally and professionally. We help you make it with clarity, not pressure.",

    },

    order: 3
  },
];



const products = [

  {
    title: "Ignite",

    slug: "ignite",

    subtitle:
      "Orientation Style Assessment",

    label: "",

    service:
      "6a1193f679192409664bfc03",

    pricing: {
      type: "free",
    },

    buttonText: "Start Free",

    isPremium: false,

    totalSeats: 500,

    enrolledStudents: 240,

    features: [
      {
        title:
          "Stream Assessment — Part 1 of 4",

        description:
          "The first dimension of our 4-dimensional assessment — designed to surface a student's workstyle.",
      },
    ],
  },

  {
    title: "Propel",

    slug: "propel",

    subtitle: "Stream Assessment",

    label: "",

    service:
      "6a1193f679192409664bfc03",

    pricing: {
      type: "fixed",

      price: 1900,
    },

    buttonText: "Buy Now",

    isPremium: false,

    totalSeats: 200,

    enrolledStudents: 110,

    features: [
      {
        title:
          "4-Dimensional Stream Assessment",

        description:
          "Complete assessment with top stream recommendations matched to the student.",
      },

      {
        title: "Career Content",

        description:
          "Well-researched information on hundreds of career options.",
      },

      {
        title:
          "25-Page Stream Report",

        description:
          "Detailed report with best-fit stream matches and a personalised development plan.",
      },
    ],
  },

  {
    title: "Accelerate",

    slug: "accelerate",

    subtitle:
      "Stream Assessment + Career Coaching",

    label: "Most Chosen",

    service:
      "6a1193f679192409664bfc03",

    pricing: {
      type: "session",

      sessions: [
        {
          label: "1 Session",

          sessionCount: 1,

          price: 5000,
        },

        {
          label: "3 Sessions",

          sessionCount: 3,

          price: 9000,
        },
      ],
    },

    buttonText: "Buy Now",

    isPremium: true,

    totalSeats: 20,

    enrolledStudents: 14,

    features: [
      {
        title:
          "4-Dimensional Stream Assessment",

        description:
          "Complete assessment with top stream recommendations.",
      },

      {
        title: "Career Content",

        description:
          "Well-researched information on hundreds of career options.",
      },

      {
        title:
          "25-Page Stream Report",

        description:
          "Best-fit stream matches with a personalised development plan.",
      },

      {
        title: "Career Counselling",

        description:
          "Online session of up to 60 minutes with MGTM's certified, experienced coaches.",
      },
    ],
  },

  {
    title: "Ignite",

    slug: "ignite-class-10-12",

    subtitle:
      "Orientation Style Assessment",

    label: "Product 1",

    service:
      "6a1193f679192409664bfc04",

    pricing: {
      type: "free",
    },

    buttonText: "Start Free",

    isPremium: false,

    totalSeats: 500,

    enrolledStudents: 210,

    features: [
      {
        title:
          "Workstyle Assessment — Part 1 of 5",

        description:
          "The first dimension of our 5-dimensional assessment to surface a student's workstyle.",
      },

      {
        title: "Career Content",

        description:
          "Well-researched information on hundreds of career options.",
      },
    ],
  },

  {
    title: "Propel",

    slug: "propel-class-10-12",

    subtitle: "Career Assessment",

    label: "Product 2",

    service:
      "6a1193f679192409664bfc04",

    pricing: {
      type: "fixed",

      price: 1900,
    },

    buttonText: "Buy Now",

    isPremium: false,

    totalSeats: 200,

    enrolledStudents: 90,

    features: [
      {
        title:
          "5-Dimensional Career Assessment",

        description:
          "Complete assessment with best-fit career recommendations.",
      },

      {
        title: "Career Content",

        description:
          "Well-researched information on hundreds of career options.",
      },

      {
        title:
          "34-Page Career Report",

        description:
          "Top career matches and a personalised development plan, in detail.",
      },
    ],
  },

  {
    title: "Accelerate",

    slug: "accelerate-class-10-12",

    subtitle:
      "Career Assessment + Career Coaching",

    label: "Most Chosen",

    service:
      "6a1193f679192409664bfc04",

    pricing: {
      type: "session",

      sessions: [
        {
          label: "1 Session",

          sessionCount: 1,

          price: 5500,
        },

        {
          label: "3 Sessions",

          sessionCount: 3,

          price: 9000,
        },
      ],
    },

    buttonText: "Buy Now",

    isPremium: true,

    totalSeats: 20,

    enrolledStudents: 14,

    features: [
      {
        title:
          "5-Dimensional Career Assessment",

        description:
          "Complete assessment with best-fit career recommendations.",
      },

      {
        title: "Career Content",

        description:
          "Well-researched information on hundreds of career options.",
      },

      {
        title:
          "34-Page Career Report",

        description:
          "Top career matches and a personalised development plan.",
      },

      {
        title: "Career Counselling",

        description:
          "Online session of up to 60 minutes with MGTM's certified, experienced coaches.",
      },
    ],
  },

  {
    title: "Captains Club",

    slug: "captains-club-class-10-12",

    subtitle:
      "Assessment + Coaching + Dedicated Mentor",

    label: "Flagship",

    service:
      "6a1193f679192409664bfc04",

    pricing: {
      type: "fixed",

      price: 18000,
    },

    buttonText: "Buy Now",

    isPremium: true,

    totalSeats: 40,

    enrolledStudents: 12,

    features: [
      {
        title:
          "5-Dimensional Career Assessment",

        description:
          "Complete assessment with best-fit career recommendations.",
      },

      {
        title: "Career Content",

        description:
          "Well-researched information on hundreds of career options.",
      },

      {
        title:
          "34-Page Career Report",

        description:
          "Top career matches and a personalised development plan.",
      },

      {
        title: "Career Counselling",

        description:
          "Online sessions of up to 60 minutes with MGTM's certified coaches.",
      },

      {
        title:
          "Dedicated Career Mentor",

        description:
          "Personalised mentoring, goal monitoring and steady support across the year.",
      },
    ],
  },
];

async function seedAll() {
  try {
    await connectDB();
    console.log("MongoDB Connected");

    // Delete old data
    await Product.deleteMany({});
    await Service.deleteMany({});

    console.log("Old products and services removed");

    // Insert services
    const insertedServices = await Service.insertMany(services);

    console.log("Services inserted");

    // Create service mapping
    const serviceMap = {
      streamSelection: insertedServices.find(
        s => s.slug === "career-coaching-8-9"
      )._id,

      careerCoaching: insertedServices.find(
        s => s.slug === "career-coaching-10-12"
      )._id,

      studyAbroad: insertedServices.find(
        s => s.slug === "study-abroad"
      )._id,
    };

    // Replace hardcoded IDs
    const productsToInsert = products.map(product => {
      let serviceId;

      if (
        ["ignite", "propel", "accelerate"].includes(product.slug)
      ) {
        serviceId = serviceMap.streamSelection;
      } else if (
        [
          "ignite-class-10-12",
          "propel-class-10-12",
          "accelerate-class-10-12",
          "captains-club-class-10-12",
        ].includes(product.slug)
      ) {
        serviceId = serviceMap.careerCoaching;
      }

      return {
        ...product,
        service: serviceId,
      };
    });

    await Product.insertMany(productsToInsert);

    console.log("Products inserted");
    console.log("Seeding completed successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedAll();