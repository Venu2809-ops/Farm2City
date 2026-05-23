import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import CategoryCard from "../cards/CategoryCard";

import { categories } from "../../data/categories";

const CategoryExplorer = () => {
  return (
    <section className="py-24 bg-[#F7F4EE]">

      <Container>

        <SectionTitle
          title="Explore Categories"
          subtitle="Discover farm-fresh essentials curated from trusted local producers."
        />

        {/* CATEGORY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => (

            <CategoryCard
              key={category.id}
              category={category}
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default CategoryExplorer;