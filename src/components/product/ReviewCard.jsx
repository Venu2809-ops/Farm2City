import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-[28px] p-6 shadow-sm hover:shadow-xl transition-all duration-500">

      {/* USER */}
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-[#D8F3DC] flex items-center justify-center text-[#1B4332] font-bold text-lg">

          {review.name.charAt(0)}

        </div>

        <div>

          <h3 className="font-semibold text-[#1B4332]">

            {review.name}

          </h3>

          <div className="flex items-center gap-1 mt-1">

            {[...Array(review.rating)].map((_, index) => (

              <Star
                key={index}
                className="w-4 h-4 fill-[#2D6A4F] text-[#2D6A4F]"
              />

            ))}

          </div>

        </div>

      </div>

      {/* REVIEW */}
      <p className="mt-5 text-gray-600 leading-relaxed">

        {review.review}

      </p>

    </div>
  );
};

export default ReviewCard;