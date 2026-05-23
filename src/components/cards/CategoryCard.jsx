import { ArrowUpRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-4xl h-105 cursor-pointer">

      {/* IMAGE */}
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-8">

        {/* FLOATING ICON */}
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-5 group-hover:translate-x-2 transition-all duration-300">

          <ArrowUpRight className="w-6 h-6" />

        </div>

        {/* TITLE */}
        <h3 className="text-3xl font-bold text-white leading-snug">

          {category.title}

        </h3>

        {/* SUBTEXT */}
        <p className="mt-3 text-white/80 text-lg">

          {category.items}

        </p>

      </div>

    </div>
  );
};

export default CategoryCard;