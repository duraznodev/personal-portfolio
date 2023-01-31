import { Footer, Navbar } from "./components";
import { Contact, Home, Portfolio, Skills } from "./sections";

function PortfolioApp() {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default PortfolioApp;
