import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetails";
import Art from "./pages/Art";
import Baking from "./pages/Baking";
import TCGs from "./pages/TCGs";

import ScrollToTop from "./components/interaction/ScrollToTop";

const App = () => {
  return (
    <Router>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/education" element={<Layout><Education /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
        <Route path="/hobbies/art" element={<Layout><Art/></Layout>} />
        <Route path="/hobbies/baking" element={<Layout><Baking/></Layout>} />
        <Route path="/hobbies/TCGs" element={<Layout><TCGs/></Layout>} />
      </Routes>

    </Router>
  );
};

export default App;