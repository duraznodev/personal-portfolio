import { Footer, Navbar } from "./components";
import { Contact, Home, Portfolio, Skills } from "./sections";

function PortfolioApp() {
  return (
    <div className="select-none bg-neutral-100">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioApp;
