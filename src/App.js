import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import ServicesDetail from './Components/Services/ServicesDetail.jsx';
import Industries from './Components/Industries/Industries.jsx';
import IndustryDetail from './Components/Industries/IndustryDetail.jsx';
import CaseStudies from './Components/CaseStudies/CaseStudies.jsx';
import CaseStudiesDetail from './Components/CaseStudies/CaseStudiesDetail.jsx';
import About from './Components/About/About.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';
import Team from './Components/Team/Team.jsx';
import Review from './Components/Review/Review.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
import Error404 from './Components/Error404/Error404.jsx';

const App = () => {
  return (
    <Router basename="/orizon-onestrong-clone">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-detail" element={<ServicesDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industry-detail" element={<IndustryDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies-detail" element={<CaseStudiesDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/review" element={<Review />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
