import {
  Sprout,
  ShoppingBag,
  Truck,
  ArrowRight,
} from "lucide-react";

import Container from "../layout/Container";

const steps = [
  {
    id: 1,
    title: "Harvested",
    description:
      "Fresh produce is carefully harvested from trusted local farms every morning.",
    icon: Sprout,
  },

  {
    id: 2,
    title: "Ordered",
    description:
      "Customers place orders directly from nearby farmers through Farm2City.",
    icon: ShoppingBag,
  },

  {
    id: 3,
    title: "Delivered",
    description:
      "Eco-friendly delivery partners bring fresh products directly to your doorstep.",
    icon: Truck,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">

      <Container>

        <div className="bg-[#2D6A4F] rounded-[30px] p-8 lg:p-12 relative overflow-hidden">

          {/* BACKGROUND GLOW */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#95D5B2] opacity-20 blur-3xl rounded-full"></div>

          {/* TITLE */}
          <div className="text-center relative z-10">

            <p className="text-[#D8F3DC] text-sm font-medium tracking-wide">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">

              How Farm2City Works

            </h2>

            <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">

              From fresh farm harvesting to doorstep delivery,
              experience a transparent and sustainable food journey.

            </p>

          </div>

          {/* STEPS */}
          <div className="relative z-10 mt-12 grid md:grid-cols-3 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300"
                >

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-[#D8F3DC] flex items-center justify-center">

                    <Icon className="w-7 h-7 text-[#2D6A4F]" />

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-2xl font-semibold text-white">

                    {step.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-white/70 leading-relaxed text-sm">

                    {step.description}

                  </p>

                  {/* ARROW */}
                  {index !== 2 && (
                    <div className="hidden md:flex absolute -right-7 top-1/2 -translate-y-1/2 z-20">

                      <ArrowRight className="w-8 h-8 text-[#D8F3DC]" />

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </Container>

    </section>
  );
};

export default HowItWorks;