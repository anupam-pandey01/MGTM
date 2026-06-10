import { useState } from "react";
import heroImg from "./assets/images/hero.jpg";
import SiteHeader from "./public/component/layout/SiteHeader/SiteHeader";
import Home from "./public/pages/Home/Home";
import SiteFooter from "./public/component/layout/SiteFooter/SiteFooter";
import { Routes, Route } from "react-router";
import About from "./public/pages/About/About";
import Services from "./public/pages/Services/Services";
import Faq from "./public/pages/Faq/Faq";
import Partnerships from "./public/pages/paternerships/Partnerships";
import Contact from "./public/pages/ContactUs/Contact";
import PublicLayout from "./public/component/layout/PublicLayout";
import AdminLayout from "./admin/component/layout/AdminLayout/AdminLayout";
import { ToastContainer } from "react-toastify";
import { ServicesDetail } from "./public/pages/ServicesDetail/ServicesDetails";
import StudyAbroad from "./public/pages/StudyAbroad/StudyAbroad";
import Login from "./admin/pages/Login/Login";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
import Students from "./admin/pages/Students/Students";
import ProtectedRoute from "./utils/ProtectedRoute";
import PublicProtectedRoute from "./utils/PublicProtectedRoute";
import FounderAbout from "./public/pages/Founder/Founder";
import CreatePost from "./admin/pages/CreatePost/CreatePost";
import BlogManagement from "./admin/pages/BlogManagement/BlogManagement";
import TermsAndCondition from "./public/pages/TermAndConditon/TermsAndCondition";
import PrivacyPolicy from "./public/pages/PrivacyPolicy/privacypolicy";
import RefundPolicy from "./public/pages/RefundPolicy /RefundPolicy";
import BlogIndexPage from "./public/pages/Blogindexpage/Blogindexpage";
import BlogDetailPage from "./public/pages/BlogDetailedPage/Blogdetailedpage";
import ImpactPage from "./public/pages/impactPage/impactPage";
import Messages from "./admin/pages/Messages/Messages";
// import LiberalArtsEducation from './public/pages/LiberalArtsEducation/LiberalArtsEducation'

function App() {
  const post = {
    category: "Career Guidance",

    title: "How to Choose the Right Career Path After Class 10",

    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",

    content: `
    <h2>Why Career Planning Matters After Class 10</h2>

    <p>
      Class 10 is one of the most significant milestones in a student's academic journey.
      It is often the first time students are required to make an important decision
      regarding their future education and career direction. The stream and subjects
      selected at this stage can influence higher education opportunities, skill
      development, and long-term career growth.
    </p>

    <p>
      Many students choose streams based on peer pressure, family expectations, or
      popular trends without fully understanding their own interests and strengths.
      Career planning helps students make informed decisions by identifying personal
      abilities, exploring opportunities, and setting realistic goals.
    </p>

    <h2>Understanding Your Interests</h2>

    <p>
      Before selecting a stream, students should spend time understanding what they
      genuinely enjoy learning. Interest plays a crucial role in long-term academic
      performance and professional satisfaction.
    </p>

    <p>
      Students can identify their interests by reflecting on their favorite subjects,
      extracurricular activities, hobbies, and projects. For example, students who
      enjoy mathematics and problem-solving may find opportunities in engineering,
      data science, or finance, while students who enjoy creativity may explore
      design, media, architecture, or marketing.
    </p>

    <h2>Exploring Academic Streams</h2>

    <h3>Science Stream</h3>

    <p>
      Science is often chosen by students interested in technology, research,
      medicine, engineering, and innovation. Subjects such as Physics, Chemistry,
      Biology, and Mathematics provide a strong foundation for numerous professional
      careers.
    </p>

    <ul>
      <li>Engineering</li>
      <li>Medicine</li>
      <li>Biotechnology</li>
      <li>Artificial Intelligence</li>
      <li>Data Science</li>
      <li>Research & Development</li>
    </ul>

    <h3>Commerce Stream</h3>

    <p>
      Commerce focuses on business, finance, economics, and management. Students
      interested in entrepreneurship, accounting, banking, or corporate leadership
      often choose this stream.
    </p>

    <ul>
      <li>Chartered Accountancy</li>
      <li>Investment Banking</li>
      <li>Business Management</li>
      <li>Financial Analysis</li>
      <li>Marketing</li>
      <li>Entrepreneurship</li>
    </ul>

    <h3>Humanities Stream</h3>

    <p>
      Humanities provides opportunities for students interested in human behavior,
      communication, public policy, law, psychology, and social sciences.
    </p>

    <ul>
      <li>Psychology</li>
      <li>Law</li>
      <li>Journalism</li>
      <li>Civil Services</li>
      <li>International Relations</li>
      <li>Education</li>
    </ul>

    <h2>The Importance of Career Research</h2>

    <p>
      Research helps students understand what different careers actually involve.
      Looking beyond job titles and salary expectations can provide a more realistic
      understanding of future opportunities and challenges.
    </p>

    <p>
      Students should explore job responsibilities, required qualifications,
      industry growth, future demand, and work-life balance before making
      career-related decisions.
    </p>

    <blockquote>
      The best career decisions are based on a combination of passion, skills,
      opportunities, and long-term growth potential.
    </blockquote>

    <h2>Building Future-Ready Skills</h2>

    <p>
      Modern employers and universities value skills beyond academics. Students
      should focus on developing communication, critical thinking, leadership,
      collaboration, and digital literacy.
    </p>

    <ul>
      <li>Communication Skills</li>
      <li>Critical Thinking</li>
      <li>Problem Solving</li>
      <li>Leadership</li>
      <li>Teamwork</li>
      <li>Digital Literacy</li>
      <li>Time Management</li>
      <li>Adaptability</li>
    </ul>

    <p>
      Participation in competitions, projects, volunteering programs, and student
      leadership initiatives can significantly improve these skills.
    </p>

    <h2>Creating a Strong Student Profile</h2>

    <p>
      Universities increasingly evaluate students holistically. A strong profile
      demonstrates initiative, commitment, and achievements beyond classroom grades.
    </p>

    <p>
      Students can strengthen their profiles through internships, certifications,
      community service, research projects, leadership activities, and extracurricular
      participation.
    </p>

    <h2>Common Mistakes to Avoid</h2>

    <ul>
      <li>Choosing a stream because friends selected it.</li>
      <li>Following social trends without research.</li>
      <li>Ignoring personal interests and strengths.</li>
      <li>Making decisions solely based on salary.</li>
      <li>Avoiding professional guidance.</li>
      <li>Assuming one stream guarantees success.</li>
    </ul>

    <h2>The Future of Careers</h2>

    <p>
      Emerging technologies and global trends are creating entirely new career
      opportunities. Fields such as Artificial Intelligence, Cybersecurity,
      Renewable Energy, Robotics, Biotechnology, and Digital Marketing continue
      to grow rapidly.
    </p>

    <p>
      Students who remain adaptable and committed to lifelong learning will be
      better positioned to succeed in an evolving professional landscape.
    </p>

    <h2>Conclusion</h2>

    <p>
      Choosing a career path after Class 10 is an important decision, but it is
      only the beginning of a much larger journey. Students should focus on
      understanding themselves, exploring opportunities, building relevant skills,
      and seeking guidance when necessary.
    </p>

    <p>
      With thoughtful planning and consistent effort, students can create a strong
      foundation for academic success, professional growth, and lifelong fulfillment.
    </p>
  `,

    tags: ["Career Planning", "Class 10", "Education", "Career Guidance"],

    author: {
      name: "MGTM Team",
      role: "Career Counseling Experts",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },

    date: "2026-06-08T10:30:00.000Z",
  };

  const relatedPosts = [
    {
      id: "1",
      title: "Career Coaching for Students: Why It Matters",
      excerpt:
        "Discover how professional career coaching helps students make confident academic and career decisions.",

      category: "Career Guidance",

      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

      slug: "career-coaching-for-students",
    },

    {
      id: "2",
      title: "Choosing the Right Stream After Class 10",
      excerpt:
        "Science, Commerce, or Humanities? Learn how to select the stream that aligns with your goals.",

      category: "Career Guidance",

      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

      slug: "choosing-right-stream-after-class-10",
    },

    {
      id: "3",
      title: "Top Emerging Careers Students Should Know About",
      excerpt:
        "Explore future-ready career options in AI, data science, sustainability, and digital business.",

      category: "Career Guidance",

      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",

      slug: "top-emerging-careers-for-students",
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicesDetail />} />
          <Route path="/services/study-abroad" element={<StudyAbroad />} />
          <Route path="/faq" element={<Faq />} />
          {/* <Route path='/blog' element={<Blogs/>}/> */}
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/founder" element={<FounderAbout />} />
          <Route path="/terms-condition" element={<TermsAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/real-metrics" element={<ImpactPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route element={<PublicProtectedRoute />}>
          <Route path="/admin/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="purchase" element={<Students />} />
            <Route path="blogs" element={<BlogManagement />} />
            <Route path="blogs/create" element={<CreatePost />} />
            <Route path="blogs/:id" element={<CreatePost />} />
            <Route path="services" element={<h1>Services</h1>} />
            <Route path="partners" element={<h1>Partners</h1>} />
            <Route path="messages" element={<Messages/>} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
