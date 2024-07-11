import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CompetitiveRatesSection from "components/CompetitiveRatesSection";
import FeatureSection from "components/FeatureSection";
import HeroSection from "components/HeroSection";
function index() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <main>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <HeroSection />
            <FeatureSection />
            <CompetitiveRatesSection />
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default index;
