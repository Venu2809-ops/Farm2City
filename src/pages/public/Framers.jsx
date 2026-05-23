import {
  MapPin,
  Leaf,
  Tractor,
  Star,
} from "lucide-react";

import Container from "../../components/layout/Container";

import farmer1 from "../../assets/farmers/farmer-1.jpg";
import farmer2 from "../../assets/farmers/farmer-2.jpg";
import farmer3 from "../../assets/farmers/farmer-5.jpg";

const farmers = [
  {
    id: 1,
    name: "Venkateshwarlu",
    location: "Tamil Nadu",
    image: farmer1,
    farms: "12 Acres",
    specialty: "Organic Vegetables",
    rating: "4.9",
  },

  {
    id: 2,
    name: "Lakshmi Devi",
    location: "Andhra Pradesh",
    image: farmer2,
    farms: "8 Acres",
    specialty: "Fresh Fruits",
    rating: "4.8",
  },

  {
    id: 3,
    name: "Lal Singh",
    location: "Punjab",
    image: farmer3,
    farms: "15 Acres",
    specialty: "Natural Grains",
    rating: "4.9",
  },
];

const Farmers = () => {
  return (
    <section className="pt-28 pb-16 bg-[#F7F4EE] min-h-screen">

      <Container>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#2D6A4F] font-medium tracking-wide">
            OUR FARMERS
          </p>

          <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-[#1B4332] leading-tight">

            Meet The Farmers Behind Your Food

          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed text-base lg:text-lg">

            Farm2City directly connects local farmers with urban families,
            ensuring freshness, fair pricing, and sustainable farming.

          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

          {[
            {
              value: "850+",
              label: "Farmers",
            },

            {
              value: "35+",
              label: "Cities",
            },

            {
              value: "1200+",
              label: "Daily Deliveries",
            },

            {
              value: "25K+",
              label: "Happy Families",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[28px] p-6 text-center shadow-sm"
            >

              <h2 className="text-3xl font-bold text-[#1B4332]">

                {item.value}

              </h2>

              <p className="mt-2 text-gray-500 text-sm">

                {item.label}

              </p>

            </div>

          ))}

        </div>

        {/* FARMER CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {farmers.map((farmer) => (

            <div
              key={farmer.id}
              className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >

              {/* IMAGE */}
              <div className="overflow-hidden h-50">

                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* NAME */}
                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold text-[#1B4332]">

                    {farmer.name}

                  </h2>

                  <div className="flex items-center gap-1 text-[#2D6A4F] font-medium">

                    <Star className="w-4 h-4 fill-[#2D6A4F]" />

                    {farmer.rating}

                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-2 mt-3 text-gray-500">

                  <MapPin className="w-4 h-4" />

                  {farmer.location}

                </div>

                {/* INFO */}
                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#E9F7EF] flex items-center justify-center">

                      <Tractor className="w-5 h-5 text-[#2D6A4F]" />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Farm Size
                      </p>

                      <h4 className="font-semibold text-[#1B4332]">

                        {farmer.farms}

                      </h4>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#E9F7EF] flex items-center justify-center">

                      <Leaf className="w-5 h-5 text-[#2D6A4F]" />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Specialty
                      </p>

                      <h4 className="font-semibold text-[#1B4332]">

                        {farmer.specialty}

                      </h4>

                    </div>

                  </div>

                </div>

                {/* BUTTON */}
                <button className="mt-8 w-full h-12 rounded-2xl bg-[#2D6A4F] text-white font-medium hover:bg-[#24543F] transition-all duration-300">

                  View Profile

                </button>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Farmers;