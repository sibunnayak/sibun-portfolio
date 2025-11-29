import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import Home from "./components/home/Home";
import { About } from "./components/about/About";
import { Skill } from "./components/skills/Skill";
import Services from "./components/services/Services";
import { Qualification } from "./components/qualification/Qualification";
import { Project } from "./components/project/Project";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Scrollup } from "./components/scrollup/Scrollup";
import { Helmet } from "react-helmet"; 
import AboutImage from "./assets/about.jpg";

function App() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sibun Nayak",
    "url": "https://sibundev.com/",
    "sameAs": [
      "https://github.com/sibunnayak/",
      "https://www.linkedin.com/in/sibunnayak/"
    ],
    "jobTitle": "Full Stack Developer & Software Engineer",
    "image": window.location.origin + "/asset/about.jpg", // Use local image for JSON-LD
    "description": "Sibun Nayak is a Full Stack Developer & Software Engineer specializing in React, Redux, JavaScript, Node.js, Java, Spring, Golang, Kratos, Gin, Redis, MySQL, PostgreSQL, Docker, Microservices, and Workflow.",
    "knowsAbout": [
      "React", "Redux", "JavaScript", "Node.js", "Java", "Spring",
      "Golang", "Kratos", "Gin", "Redis", "MySQL", "SQL", "PostgreSQL",
      "Docker", "Microservices", "Workflow", "Web Development"
    ]
  };
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Sibun Nayak | Full Stack Developer & Software Engineer</title>
        <meta
          name="description"
          content="Sibun Nayak - Full Stack Developer & Software Engineer. Explore Sibun's projects, experience, and skills in React, Redux, JavaScript, Node.js, Java, Spring, Golang, Kratos, Gin, Redis, MySQL, PostgreSQL, Docker, Microservices, and more."
        />
        <meta
          name="keywords"
          content="Sibun Nayak, Full Stack Developer, Software Engineer, React, Redux, JavaScript, Node.js, Java, Spring, Golang, Kratos, Gin, Redis, MySQL, SQL, PostgreSQL, Docker, Microservices, Workflow, Portfolio"
        />
        <meta name="author" content="Sibun Nayak" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Sibun Nayak | Software Engineer / Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer & Software Engineer. Sibun Nayak specializes in modern web development and backend microservices."
        />
        <meta property="og:image" content={AboutImage} />
        <meta property="og:url" content="https://sibundev.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sibun Nayak | Software Engineer / Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Full Stack Developer & Software Engineer. Sibun Nayak specializes in modern web development and backend microservices."
        />
        <meta name="twitter:image" content={AboutImage} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      <Header />

      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification />
        <Project /> 
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
