import Banner from "./Banner/Banner"
import ContactInfo from "./ContactInfo/Contact";
import Footer from "./Footer/Footer";
import Topbar from "./Header/Header"
import HoistingSolution from "./HoistingBenefits/Hoisting";
import SourceCode from "./Opensource/Webpage";
import Testimonials from "./Testimonials/Testimonials";

const Main = () => {
    return(
        <div>
          <Topbar />
          <Banner />
          <HoistingSolution />
          <SourceCode />
          <Testimonials />
          <ContactInfo />
          <Footer />
        </div>
    )
}
export default Main;