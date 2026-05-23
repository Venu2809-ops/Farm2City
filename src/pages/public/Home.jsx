import Hero from "../../components/home/Hero";
import SeasonalPicks from "../../components/home/SeasonalPicks";
import CategoryExplorer from "../../components/home/CategoryExplorer";
import HowItWorks from "../../components/home/HowItWorks";
import FarmerStories from "../../components/home/FarmerStories";
import OurImpact from "../../components/home/OurImpact";
import TraceabilitySection from "../../components/home/TraceabilitySection";





const Home = () => {
  return (
    <>
      <Hero />
      <SeasonalPicks />
      <CategoryExplorer />
      <HowItWorks />
      <FarmerStories />
      <OurImpact />
      <TraceabilitySection />
       
    </>
  );
};

export default Home;