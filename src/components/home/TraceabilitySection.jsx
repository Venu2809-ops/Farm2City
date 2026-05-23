import { Leaf, ShieldCheck, Truck } from "lucide-react";

import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import TrackingStepCard from "../cards/TrackingStepCard";

import { trackingSteps } from "../../data/traceability";

const TraceabilitySection = () => {
  return (
    <section className="py-24 bg-[#F7F4EE]">

      <Container>

        <SectionTitle
          title="Track Your Food Journey"
          subtitle="See exactly how your food travels from local farms to your doorstep."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-[36px] p-10 shadow-sm ">

            {trackingSteps.map((step, index) => (

              <TrackingStepCard
                key={step.id}
                step={step}
                active={index < 3}
              />

            ))}

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* FEATURE CARDS */}
            <div className="space-y-6">

              {/* CARD 1 */}
              <div className="bg-white rounded-4xl p-8 flex items-start gap-5 shadow-sm hover:shadow-xl transition-all duration-300">

                <div className="w-16 h-16 rounded-2xl bg-[#D8F3DC] flex items-center justify-center">

                  <Leaf className="w-8 h-8 text-[#2D6A4F]" />

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-[#1B4332]">

                    100% Fresh Produce

                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">

                    Products are harvested only after orders are placed for maximum freshness.

                  </p>

                </div>

              </div>

              {/* CARD 2 */}
              <div className="bg-white rounded-4xl p-8 flex items-start gap-5 shadow-sm hover:shadow-xl transition-all duration-300">

                <div className="w-16 h-16 rounded-2xl bg-[#FFF3D6] flex items-center justify-center">

                  <ShieldCheck className="w-8 h-8 text-[#E09F3E]" />

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-[#1B4332]">

                    Quality Assured

                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">

                    Every product goes through freshness and hygiene verification before shipping.

                  </p>

                </div>

              </div>

              {/* CARD 3 */}
              <div className="bg-white rounded-4xl p-8 flex items-start gap-5 shadow-sm hover:shadow-xl transition-all duration-300">

                <div className="w-16 h-16 rounded-2xl bg-[#E7F0FF] flex items-center justify-center">

                  <Truck className="w-8 h-8 text-[#3A86FF]" />

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-[#1B4332]">

                    Eco Delivery

                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">

                    Sustainable packaging and optimized delivery routes reduce food waste.

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

export default TraceabilitySection;