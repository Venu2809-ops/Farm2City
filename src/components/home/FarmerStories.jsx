import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import FarmerStoryCard from "../cards/FarmerStoryCard";

import { farmers } from "../../data/farmers";
import FadeUp from "../../animations/FadeUp";

const FarmerStories = () => {
  return (
    <section className="py-14 lg:py-18">

      <Container>

        <SectionTitle
          title="Stories From Our Farmers"
          subtitle="Meet the hardworking farmers bringing healthy food directly to your home."
        />

        {/* STORIES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

                {farmers.map((farmer, index) => (

  <FadeUp
    key={farmer.id}
    delay={index * 0.1}
  >
    <FarmerStoryCard farmer={farmer} />
  </FadeUp>

))}

        </div>

      </Container>

    </section>
  );
};

export default FarmerStories;