import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetails";
import Hobbies from "./pages/Hobbies";

import ScrollToTop from "./components/interaction/ScrollToTop";

const App = () => {
  return (
    <Router>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/experience" element={<Layout><Experience /></Layout>} />
        <Route path="/education" element={<Layout><Education /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
        <Route path="/hobbies" element={<Layout><Hobbies /></Layout>} />
      </Routes>

    </Router>
  );
};

export default App;