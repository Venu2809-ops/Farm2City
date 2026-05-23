import {
  Users,
  Leaf,
  Truck,
  Sprout,
} from "lucide-react";

import Container from "../layout/Container";

const impacts = [
  {
    id: 1,
    value: "25K+",
    label: "Families Served",
    icon: Users,
  },

  {
    id: 2,
    value: "950+",
    label: "Tons CO₂ Reduced",
    icon: Leaf,
  },

  {
    id: 3,
    value: "1200+",
    label: "Farm Deliveries Daily",
    icon: Truck,
  },

  {
    id: 4,
    value: "850+",
    label: "Farmers Empowered",
    icon: Sprout,
  },
];

const OurImpact = () => {
  return (
    <section className="py-16 bg-[#E9F7EF]">

      <Container>

        {/* TITLE */}
        <div className="text-center">

          <p className="text-[#2D6A4F] text-sm font-medium tracking-wide">
            MAKING A DIFFERENCE
          </p>

          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#1B4332]">

            Our Impact

          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">

            Farm2City is transforming how fresh food reaches urban families
            while supporting sustainable farming communities.

          </p>

        </div>

        {/* IMPACT GRID */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-[28px] p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >

                {/* ICON */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D8F3DC] flex items-center justify-center">

                  <Icon className="w-8 h-8 text-[#2D6A4F]" />

                </div>

                {/* VALUE */}
                <h3 className="mt-6 text-3xl lg:text-4xl font-bold text-[#1B4332]">

                  {item.value}

                </h3>

                {/* LABEL */}
                <p className="mt-3 text-gray-600 text-sm lg:text-base">

                  {item.label}

                </p>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
};

export default OurImpact;