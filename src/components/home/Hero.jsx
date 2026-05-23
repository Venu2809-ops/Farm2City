import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import heroFarmer from "../../assets/images/hero-farmer.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();

  const filteredProducts =
    search.length > 0
      ? products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  const handleSearch = () => {
    const found = products.find((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      navigate(`/product/${found.id}`);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">

      <Container>

        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] min-h-[850px] md:min-h-[760px] lg:min-h-[720px]">

          {/* Background */}
          <img
            src={heroFarmer}
            alt="Farmer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 px-5 sm:px-8 lg:px-14 pt-10 sm:pt-14"
          >

            <p className="text-white/90 text-xs sm:text-sm font-medium mb-4">
              🌿 Trusted by 1200+ Farmers
            </p>

            {/* Heading */}
            <h1 className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            leading-tight
            font-bold
            text-white
            max-w-4xl">

              From Our Farms

              <br />

              <span className="italic font-light text-[#D8F3DC]">
                To Your Family
              </span>

            </h1>

            {/* Subtitle */}
            <p className="
            mt-5
            text-sm
            sm:text-base
            lg:text-lg
            text-white/85
            max-w-2xl
            leading-relaxed">

              Bringing you the freshest, safest and most nutritious
              food directly from local farms.

            </p>

            {/* Search */}
            <div className="relative mt-8 max-w-2xl">

              <div className="
              bg-white
              rounded-3xl
              p-2
              flex
              flex-col
              sm:flex-row
              gap-2
              items-stretch
              sm:items-center
              shadow-xl">

                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setNotFound(false);
                  }}
                  placeholder="Search vegetables, fruits, grains..."
                  className="
                  flex-1
                  px-5
                  py-3
                  outline-none
                  text-gray-700
                  text-sm
                  rounded-xl"
                />

                <Button
                  onClick={handleSearch}
                  className="w-full sm:w-auto"
                >
                  Search
                </Button>

              </div>

              {/* Suggestions */}

              {search &&
                filteredProducts.length > 0 && (

                <div className="
                absolute
                top-full
                mt-2
                w-full
                bg-white
                rounded-2xl
                shadow-xl
                overflow-hidden
                z-50
                max-h-[300px]
                overflow-y-auto">

                  {filteredProducts.map((item) => (

                    <div
                      key={item.id}
                      onClick={() =>
                        navigate(`/product/${item.id}`)
                      }
                      className="
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      cursor-pointer
                      hover:bg-gray-100">

                      <img
                        src={item.image}
                        className="w-12 h-12 rounded-xl object-cover"
                      />

                      <div>

                        <h3 className="font-medium text-sm sm:text-base">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          ₹{item.price}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              )}

              {/* Not found */}

              {search &&
                filteredProducts.length === 0 &&
                notFound && (

                <div className="
                mt-3
                bg-red-100
                text-red-600
                px-4
                py-3
                rounded-xl
                text-sm">

                  Product not available

                </div>

              )}

            </div>

            {/* Avatars */}

            <div className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-4">

              <div className="flex -space-x-3">

                <img
                  src={heroFarmer}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={heroFarmer}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={heroFarmer}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />

              </div>

              <p className="text-white/90 text-sm">
                Trusted by 25K+ families
              </p>

            </div>

          </motion.div>

          {/* Stats Panel */}

          <div className="
          absolute
          bottom-0
          left-0
          w-full
          bg-white
          rounded-t-[24px]
          sm:rounded-t-[28px]
          py-6
          px-4
          sm:px-8
          lg:px-10">

            <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-5
            sm:gap-6">

              {[
                {
                  icon: "👨‍🌾",
                  value: "850+",
                  label: "Farmers",
                },
                {
                  icon: "📦",
                  value: "1250+",
                  label: "Products",
                },
                {
                  icon: "🏙️",
                  value: "35+",
                  label: "Cities",
                },
                {
                  icon: "❤️",
                  value: "2.5L+",
                  label: "Families",
                },
                {
                  icon: "🚜",
                  value: "1200+",
                  label: "Deliveries",
                },
                {
                  icon: "🌿",
                  value: "950+",
                  label: "CO₂ Saved",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="text-center group"
                >

                  <div className="
                  w-11 h-11 sm:w-12 sm:h-12
                  mx-auto
                  rounded-2xl
                  bg-[#F4F8F2]
                  flex
                  items-center
                  justify-center
                  text-lg
                  sm:text-xl
                  shadow-sm
                  group-hover:scale-105
                  transition">

                    {item.icon}

                  </div>

                  <h3 className="
                  mt-3
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-[#1B4332]">

                    {item.value}

                  </h3>

                  <p className="
                  mt-1
                  text-[11px]
                  sm:text-xs
                  text-gray-500
                  font-medium">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;