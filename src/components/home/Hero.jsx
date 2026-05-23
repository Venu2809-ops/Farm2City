import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import heroFarmer from "../../assets/images/hero-farmer.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

const Hero = () => {
      const [search,setSearch]=useState("");
      const [notFound,setNotFound]=useState(false);

      const navigate=useNavigate();

      const filteredProducts =
        search.length > 0
      ? products.filter((item)=>
        item.name.toLowerCase()
        .includes(search.toLowerCase()))
      : [];


      const handleSearch=()=>{

      const found=products.find((item)=>
      item.name.toLowerCase()
      .includes(search.toLowerCase())
      );

      if(found){

      navigate(`/product/${found.id}`);
        setNotFound(false);

    }

    else{

    setNotFound(true);

    }

    };  



  return (
    <section className="pt-28 pb-14">

      <Container>

        {/* HERO CARD */}
        <div className="relative overflow-hidden rounded-[28px] min-h-180 ">

          {/* BACKGROUND IMAGE */}
          <img
            src={heroFarmer}
            alt="Farmer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/35"></div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 px-6 lg:px-14 pt-14"
          >

            {/* TOP TEXT */}
            <p className="text-white/90 text-sm font-medium mb-5">
              🌿 Trusted by 1200+ Farmers
            </p>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-white max-w-3xl">

              From Our Farms

              <br />

              <span className="italic font-light text-[#D8F3DC]">
                To Your Family
              </span>

            </h1>

            {/* SUBTITLE */}
            <p className="mt-5 text-base lg:text-lg text-white/85 max-w-xl leading-relaxed">

              Bringing you the freshest, safest and most nutritious
              food directly from local farms.

            </p>

                {/* SEARCH */}

             <div className="relative mt-8 max-w-lg">

<div className="
bg-white
rounded-full
p-2
flex
items-center
shadow-xl">

<input
type="text"
value={search}

onChange={(e)=>{

setSearch(e.target.value);
setNotFound(false);

}}

placeholder="Search vegetables, fruits, grains..."

className="
flex-1
px-5
py-2
outline-none
text-gray-700
text-sm"
/>


<Button onClick={handleSearch}>

Search

</Button>

</div>


{/* Suggestions */}

{search &&
filteredProducts.length>0 &&(

<div className="
absolute
top-full
mt-2
w-full
bg-white
rounded-3xl
shadow-xl
overflow-hidden
z-50">

{filteredProducts.map((item)=>(

<div
key={item.id}

onClick={()=>
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

<h3 className="font-medium">

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


{/* Product not found */}

{search &&
filteredProducts.length===0 &&
notFound && (

<div className="
mt-3
bg-red-100
text-red-600
px-4
py-3
rounded-xl">

Product not available

</div>

)}

             </div>

            {/* AVATARS */}
            <div className="mt-8 flex items-center gap-4">

              <div className="flex -space-x-3">

                <img
                  src={heroFarmer}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={heroFarmer}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={heroFarmer}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />

              </div>

              <p className="text-white/90 text-sm">
                Trusted by 25K+ families
              </p>

            </div>

          </motion.div>

          {/* STATS PANEL */}
          <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[28px] py-6 px-5 lg:px-10">

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

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

                  {/* ICON */}
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#F4F8F2] flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-all duration-300">

                    {item.icon}

                  </div>

                  {/* VALUE */}
                  <h3 className="mt-3 text-2xl font-bold text-[#1B4332]">

                    {item.value}

                  </h3>

                  {/* LABEL */}
                  <p className="mt-1 text-gray-500 text-xs font-medium">

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