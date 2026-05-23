import {
  ShoppingBag,
  Star,
  Leaf,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const discount =
    product.oldPrice &&
    Math.round(
      ((product.oldPrice - product.price) /
        product.oldPrice) *
        100
    );

  return (
    <Link
      to={`/product/${product.id}`}
      className="
        group
        block
        bg-white
        rounded-[28px]
        overflow-hidden
        border border-[#ECECEC]
        hover:shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-2
      "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden h-52 sm:h-56">

        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-all
            duration-700
          "
        />

        {/* CATEGORY */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#1B4332] shadow-sm">

          {product.category}

        </div>

        {/* ORGANIC BADGE */}
        {product.organic && (
          <div className="absolute top-3 right-3 bg-[#2D6A4F] text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">

            <Leaf className="w-3 h-3" />

            Organic

          </div>
        )}

        {/* DISCOUNT */}
        {discount > 0 && (
          <div className="absolute bottom-3 left-3 bg-[#FF6B6B] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">

            {discount}% OFF

          </div>
        )}

        {/* BESTSELLER */}
        {product.bestseller && (
          <div className="absolute bottom-3 right-3 bg-[#1B4332] text-white text-[11px] px-3 py-1 rounded-full shadow-md">

            Bestseller

          </div>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* TOP INFO */}
        <div className="flex items-center justify-between">

          {/* RATING */}
          <div className="flex items-center gap-1 text-sm text-[#2D6A4F] font-medium">

            <Star className="w-4 h-4 fill-[#2D6A4F]" />

            {product.rating}

            <span className="text-gray-400 text-xs">

              ({product.reviews})

            </span>

          </div>

          {/* STOCK */}
          <div
            className={`
              text-xs font-medium px-2 py-1 rounded-full
              ${
                product.stock > 10
                  ? "bg-[#E9F7EF] text-[#2D6A4F]"
                  : "bg-[#FFF4E5] text-[#E09F3E]"
              }
            `}
          >

            {product.stock > 10
              ? "In Stock"
              : "Low Stock"}

          </div>

        </div>

        {/* NAME */}
        <h3 className="mt-3 text-lg sm:text-xl font-semibold text-[#1B4332] line-clamp-1">

          {product.name}

        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">

          {product.description}

        </p>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">

          {product.tags?.slice(0, 2).map((tag, index) => (

            <span
              key={index}
              className="px-3 py-1 rounded-full bg-[#F4F8F2] text-[#2D6A4F] text-[11px] font-medium"
            >

              {tag}

            </span>

          ))}

        </div>

        {/* DELIVERY */}
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">

          <Clock3 className="w-4 h-4" />

          {product.delivery}

        </div>

        {/* PRICE + BUTTON */}
        <div className="mt-5 flex items-center justify-between">

          <div>

            <div className="flex items-center gap-2">

              <p className="text-2xl font-bold text-[#2D6A4F]">

                ₹{product.price}

              </p>

              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">

                  ₹{product.oldPrice}

                </span>
              )}

            </div>

            <span className="text-xs text-gray-400">

              {product.unit}

            </span>

          </div>

          {/* BUTTON */}
          <button
            onClick={(e) => e.preventDefault()}
            className="
              w-11
              h-11
              rounded-2xl
              bg-[#2D6A4F]
              text-white
              flex
              items-center
              justify-center
              hover:scale-110
              hover:bg-[#24543F]
              transition-all
              duration-300
              shadow-md
            "
          >

            <ShoppingBag className="w-5 h-5" />

          </button>

        </div>

      </div>

    </Link>
  );
};

export default ProductCard;