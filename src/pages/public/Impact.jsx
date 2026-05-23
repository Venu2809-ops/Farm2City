import {
  Leaf,
  Users,
  Truck,
  Sprout,
} from "lucide-react";

import Container from "../../components/layout/Container";

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
    label: "Daily Deliveries",
    icon: Truck,
  },

  {
    id: 4,
    value: "850+",
    label: "Farmers Empowered",
    icon: Sprout,
  },
];

const Impact = () => {
  return (
    <section className="pt-28 pb-16 bg-[#FCFCFA] min-h-screen">

      <Container>

        {/* HERO */}
        <div className="bg-[#2D6A4F] rounded-4xl p-8 lg:p-12 relative overflow-hidden">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#95D5B2] opacity-20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <p className="text-[#D8F3DC] font-medium text-sm">

              OUR IMPACT

            </p>

            <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight max-w-3xl">

              Building A Better
              <br />
              Food Ecosystem

            </h1>

            <p className="mt-5 text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">

              Farm2City is helping local farmers thrive while
              delivering healthier food to urban families.

            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  bg-white
                  rounded-[28px]
                  p-6
                  border border-[#ECECEC]
                  hover:shadow-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-[#E9F7EF] flex items-center justify-center">

                  <Icon className="w-7 h-7 text-[#2D6A4F]" />

                </div>

                {/* VALUE */}
                <h2 className="mt-6 text-4xl font-bold text-[#1B4332]">

                  {item.value}

                </h2>

                {/* LABEL */}
                <p className="mt-3 text-gray-500 leading-relaxed">

                  {item.label}

                </p>

              </div>
            );
          })}

        </div>

        {/* MISSION SECTION */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {/* LEFT */}
          <div className="bg-white rounded-[28px] p-8 border border-[#ECECEC]">

            <p className="text-[#2D6A4F] font-semibold text-sm">

              OUR MISSION

            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#1B4332] leading-tight">

              Sustainable Farming
              For Future Generations

            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">

              We help farmers earn fair prices while reducing
              unnecessary supply chains and food waste.

              Our mission is to create a transparent farm-to-home
              ecosystem that benefits both people and the planet.

            </p>

          </div>

          {/* RIGHT */}
          <div className="bg-[#F7F4EE] rounded-[28px] p-8 border border-[#ECECEC]">

            <div className="space-y-6">

              {/* ITEM */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC] flex items-center justify-center">

                  <Leaf className="w-6 h-6 text-[#2D6A4F]" />

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-[#1B4332]">

                    Eco-Friendly Delivery

                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">

                    Sustainable packaging and optimized delivery
                    routes reduce carbon emissions.

                  </p>

                </div>

              </div>

              {/* ITEM */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC] flex items-center justify-center">

                  <Users className="w-6 h-6 text-[#2D6A4F]" />

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-[#1B4332]">

                    Farmer Empowerment

                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">

                    Direct market access helps farmers earn
                    better profits and build stability.

                  </p>

                </div>

              </div>

              {/* ITEM */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC] flex items-center justify-center">

                  <Truck className="w-6 h-6 text-[#2D6A4F]" />

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-[#1B4332]">

                    Faster Fresh Delivery

                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">

                    Products reach families within hours after
                    harvesting for maximum freshness.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Impact;