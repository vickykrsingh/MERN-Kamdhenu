import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutProject from "./pages/AboutProject.jsx";

import JoinMission from "./pages/JoinMission";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import AboutCowPuja from "./component/AboutCowPuja";
import VedaAboutCow from "./component/VedaAboutCow";
import SpiritualImp from "./component/SpiritualImp";
import Testimonials from "./component/Testimonials";
import Gallery from "./component/Gallery";
import Profile from "./pages/Profile.jsx";
import CowCardPage from "./pages/CowCardPage.jsx";
import PageNotFound from "./pages/404";
import AdoptGaumata from "./pages/AdoptGaumata.jsx";
import DonateNow from "./component/DonateNow.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-project" element={<AboutProject />} />
      <Route path="/adopt-gaumata" element={<AdoptGaumata />} />
      <Route path="/join-mission" element={<JoinMission />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/cow-puja" element={<AboutCowPuja />} />
      <Route path="/veda-cow" element={<VedaAboutCow />} />
      <Route path="/spiritual-importance" element={<SpiritualImp />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/gaumata/:id" element={<CowCardPage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/donate-now" element={<DonateNow/>}/>
    </Routes>
  );
}

export default App;