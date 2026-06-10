
require("dotenv").config();
const mongoose = require("mongoose");

const Blog = require("./models/Blog");
const connectDB = require("./config/db");


const blog = [
  {
    title: "How to Choose the Right Stream After Class 10",
    slug: "how-to-choose-the-right-stream-after-class-10",
    shortDescription:
      "A complete guide to selecting Science, Commerce, or Humanities based on your interests, strengths, and career goals.",
    content: `
      <h2>Introduction</h2>
      <p>Choosing a stream after Class 10 is one of the first major academic decisions in a student's life. The right choice depends on interests, aptitude, and future aspirations.</p>

      <h2>Understand Your Interests</h2>
      <p>Before selecting a stream, identify the subjects you genuinely enjoy studying and performing well in.</p>

      <h2>Explore Career Options</h2>
      <ul>
        <li>Science: Engineering, Medicine, Research</li>
        <li>Commerce: Finance, Accounting, Business</li>
        <li>Humanities: Law, Journalism, Psychology</li>
      </ul>

      <p>Seek professional career guidance if you're unsure about your options.</p>
    `,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      publicId: "dummy-stream-selection"
    },
    category: "Career Guidance",
    tags: ["career", "students", "stream selection"],
    author: "MGTM Team",
    readTime: 4,
    seoTitle: "How to Choose the Right Stream After Class 10",
    seoDescription: "Expert guidance for choosing the right stream after Class 10.",
    seoKeywords: ["stream selection", "career guidance", "class 10"],
    status: "Published",
    featured: true,
    views: 154
  },

  {
    title: "Study Abroad in Canada: Complete Guide for Indian Students",
    slug: "study-abroad-in-canada-guide",
    shortDescription:
      "Everything you need to know about universities, tuition fees, scholarships, and visa requirements in Canada.",
    content: `
      <h2>Why Study in Canada?</h2>
      <p>Canada is one of the most preferred destinations for international students due to its quality education and welcoming environment.</p>

      <h2>Popular Universities</h2>
      <ul>
        <li>University of Toronto</li>
        <li>University of British Columbia</li>
        <li>McGill University</li>
      </ul>

      <h2>Student Visa Process</h2>
      <p>Students need an offer letter, proof of funds, and a valid passport before applying for a study permit.</p>
    `,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1517935706615-2717063c2225",
      publicId: "dummy-canada"
    },
    category: "Education",
    tags: ["canada", "study abroad", "universities"],
    author: "MGTM Team",
    readTime: 6,
    seoTitle: "Study Abroad in Canada",
    seoDescription: "Complete guide for Indian students planning to study in Canada.",
    seoKeywords: ["canada study visa", "canadian universities"],
    status: "Published",
    featured: true,
    views: 287
  },

  {
    title: "Why Soft Skills Matter More Than Ever",
    slug: "why-soft-skills-matter-more-than-ever",
    shortDescription:
      "Technical skills can get you interviews, but soft skills help you succeed in academics and professional life.",
    content: `
      <h2>What Are Soft Skills?</h2>
      <p>Soft skills include communication, teamwork, leadership, adaptability, and problem-solving abilities.</p>

      <h2>Benefits for Students</h2>
      <ol>
        <li>Better communication</li>
        <li>Improved confidence</li>
        <li>Stronger leadership abilities</li>
      </ol>

      <p>Developing soft skills early can significantly improve academic and career outcomes.</p>
    `,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      publicId: "dummy-soft-skills"
    },
    category: "Soft Skills",
    tags: ["communication", "leadership"],
    author: "MGTM Team",
    readTime: 3,
    seoTitle: "Why Soft Skills Matter",
    seoDescription: "Discover the importance of soft skills in modern careers.",
    seoKeywords: ["soft skills", "communication skills"],
    status: "Published",
    featured: false,
    views: 98
  },

  {
    title: "How Parents Can Support Their Child's Academic Journey",
    slug: "how-parents-can-support-their-childs-academic-journey",
    shortDescription:
      "Practical ways parents can guide, motivate, and support students throughout their educational journey.",
    content: `
      <h2>The Role of Parents</h2>
      <p>Parents play a critical role in shaping a student's confidence, discipline, and motivation.</p>

      <h2>Effective Support Strategies</h2>
      <ul>
        <li>Encourage open communication</li>
        <li>Set realistic expectations</li>
        <li>Celebrate progress</li>
      </ul>

      <p>Supportive parenting helps students develop resilience and confidence.</p>
    `,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
      publicId: "dummy-parenting"
    },
    category: "Parenting",
    tags: ["parenting", "students"],
    author: "MGTM Team",
    readTime: 5,
    seoTitle: "Supporting Your Child's Academic Journey",
    seoDescription: "Tips for parents to support students academically and emotionally.",
    seoKeywords: ["parenting", "student success"],
    status: "Published",
    featured: true,
    views: 176
  }
]


async function seedBlogs() {
  try {

    // await mongoose.connect(process.env.MONGO_URI);
    connectDB()

    console.log("MongoDB Connected");

    await Blog.deleteMany();

    console.log("Old services removed");

    await Blog.insertMany(blog);

    console.log("Services inserted");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
}

seedBlogs()