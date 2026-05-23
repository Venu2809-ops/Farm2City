import { MapPin } from "lucide-react";

const FarmerStoryCard = ({ farmer }) => {
  return (
    <div className="group relative overflow-hidden rounded-[36px] bg-white shadow-sm hover:shadow-2xl transition-all duration-500">

      {/* IMAGE */}
      <div className="relative h-105 overflow-hidden">

        <img
          src={farmer.image}
          alt={farmer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />

        {/* GLASS OVERLAY */}
        <div className="absolute bottom-5 left-5 right-5 bg-white/20 backdrop-blur-xl rounded-[28px] p-5 border border-white/30">

          <div className="flex items-center gap-2 text-white text-sm">

            <MapPin className="w-4 h-4" />

            {farmer.location}

          </div>

          <h3 className="mt-3 text-2xl font-bold text-white">

            {farmer.name}

          </h3>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-7">

        <p className="text-gray-600 leading-relaxed text-lg">

          “{farmer.quote}”

        </p>

      </div>

    </div>
  );
};

export default FarmerStoryCard;