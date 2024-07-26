import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
// import Services from './Components/Services/Services';
// import ServicesDetail from './Components/Services/ServicesDetail';
// import Industries from './Components/Industries/Industries';
// import IndustryDetail from './Components/Industries/IndustryDetail';
// import CaseStudies from './Components/CaseStudies/CaseStudies';
// import CaseStudiesDetail from './Components/CaseStudies/CaseStudiesDetail';
// import About from './Components/About/About';
// import FAQ from './Components/FAQ/FAQ';
// import Team from './Components/Team/Team';
// import Review from './Components/Review/Review';
// import Pricing from './Components/Pricing/Pricing';
// import NotFound from './Components/NotFound/NotFound';
// import Contacts from './Components/Contacts/Contacts';

const App = () => {
  return (
    <Router basename="/orizon-onestrong-clone">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
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
        <Route path="/404" element={<NotFound />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
