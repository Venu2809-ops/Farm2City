import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../cards/ProductCard";

import { products } from "../../data/products";
import FadeUp from "../../animations/FadeUp";

const SeasonalPicks = () => {
  return (
    <section className="py-16">
      <Container>

        <SectionTitle
          title="Seasonal Picks"
          subtitle="Freshly harvested seasonal products directly from trusted local farms."
        />

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {products
            .slice(0, 6)   // 👈 only show first 6 products
            .map((product, index) => (
              <FadeUp
                key={product.id}
                delay={index * 0.1}
              >
                <ProductCard product={product} />
              </FadeUp>
            ))}

        </div>

      </Container>
    </section>
  );
};

export default SeasonalPicks;