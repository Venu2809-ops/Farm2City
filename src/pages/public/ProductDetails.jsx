import { useState } from "react";

import ReviewCard from "../../components/product/ReviewCard";
import ProductCard from "../../components/cards/ProductCard";

import { reviews } from "../../data/reviews";
import { useParams } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";

import {
  Star,
  MapPin,
  Leaf,
  Plus,
  Minus,
  Clock3,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "../../components/layout/Container";
import { products } from "../../data/products";

const ProductDetails = () => {

  const { showToast } = useToast();

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const discount =
    product?.oldPrice &&
    Math.round(
      ((product.oldPrice - product.price) /
        product.oldPrice) *
        100
    );

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <section className="pt-28 pb-16">

        <Container>

          <div className="text-center">

            <h2 className="text-2xl md:text-4xl font-bold text-[#1B4332]">

              Product Not Found

            </h2>

          </div>

        </Container>

      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 bg-[#FCFCFA] min-h-screen">

      <Container>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* LEFT IMAGE */}
          <div className="w-full">

            <div className="relative overflow-hidden rounded-4xl bg-[#F7F4EE] shadow-sm border border-[#ECECEC]">

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-80
                  sm:h-130
                  lg:h-155
                  object-cover
                  hover:scale-105
                  transition-all
                  duration-700
                "
              />

              {/* BADGES */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-3">

                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-[#1B4332] shadow-sm">

                  {product.category}

                </div>

                {product.organic && (
                  <div className="bg-[#2D6A4F] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-md">

                    <Leaf className="w-3 h-3" />

                    Organic

                  </div>
                )}

              </div>

              {/* DISCOUNT */}
              {discount > 0 && (
                <div className="absolute bottom-4 left-4 bg-[#FF6B6B] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">

                  {discount}% OFF

                </div>
              )}

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">

            {/* STOCK + DELIVERY */}
            <div className="flex flex-wrap items-center gap-3">

              <div
                className={`
                  px-4 py-2 rounded-full text-xs font-semibold
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

              <div className="px-4 py-2 rounded-full bg-[#EEF4FF] text-[#3A86FF] text-xs font-semibold flex items-center gap-2">

                <Truck className="w-3 h-3" />

                {product.delivery}

              </div>

            </div>

            {/* TITLE */}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4332] leading-tight">

              {product.name}

            </h1>

            {/* RATING */}
            <div className="mt-5 flex flex-wrap items-center gap-4">

              <div className="flex items-center gap-2">

                <Star className="w-5 h-5 fill-[#2D6A4F] text-[#2D6A4F]" />

                <span className="font-semibold text-[#1B4332]">

                  {product.rating}

                </span>

                <span className="text-gray-400 text-sm">

                  ({product.reviews} reviews)

                </span>

              </div>

              {product.bestseller && (
                <div className="px-4 py-2 rounded-full bg-[#1B4332] text-white text-xs font-semibold">

                  Bestseller

                </div>
              )}

            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">

              {product.description}

            </p>

            {/* TAGS */}
            <div className="mt-6 flex flex-wrap gap-3">

              {product.tags?.map((tag, index) => (

                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-[#F4F8F2] text-[#2D6A4F] text-xs sm:text-sm font-medium"
                >

                  {tag}

                </div>

              ))}

            </div>

            {/* PRICE */}
            <div className="mt-8 flex items-end gap-3 flex-wrap">

              <h2 className="text-4xl sm:text-5xl font-bold text-[#2D6A4F]">

                ₹{product.price}

              </h2>

              {product.oldPrice && (
                <span className="text-2xl text-gray-400 line-through">

                  ₹{product.oldPrice}

                </span>
              )}

              <span className="text-base text-gray-400 mb-1">

                / {product.unit}

              </span>

            </div>

            {/* QUANTITY + BUTTON */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">

              {/* QUANTITY */}
              <div className="flex items-center bg-[#F7F4EE] rounded-2xl overflow-hidden border border-[#E5E5E5]">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all"
                >

                  <Minus className="w-4 h-4" />

                </button>

                <span className="w-12 text-center font-semibold text-[#1B4332]">

                  {quantity}

                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all"
                >

                  <Plus className="w-4 h-4" />

                </button>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  showToast("✔ Added to cart");
                }}
                className="
                  px-8
                  h-12
                  rounded-2xl
                  bg-[#2D6A4F]
                  text-white
                  text-sm
                  sm:text-base
                  font-semibold
                  hover:scale-105
                  hover:bg-[#24543F]
                  transition-all
                  duration-300
                  shadow-lg
                "
              >

                Add To Cart

              </button>

            </div>

            {/* EXTRA INFO */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">

              <div className="bg-white rounded-3xl p-5 border border-[#ECECEC]">

                <Clock3 className="w-6 h-6 text-[#2D6A4F]" />

                <h3 className="mt-4 font-semibold text-[#1B4332]">

                  Fresh Harvest

                </h3>

                <p className="mt-2 text-sm text-gray-500">

                  {product.freshness}

                </p>

              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#ECECEC]">

                <ShieldCheck className="w-6 h-6 text-[#E09F3E]" />

                <h3 className="mt-4 font-semibold text-[#1B4332]">

                  Traceability

                </h3>

                <p className="mt-2 text-sm text-gray-500">

                  {product.traceId}

                </p>

              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#ECECEC]">

                <Truck className="w-6 h-6 text-[#3A86FF]" />

                <h3 className="mt-4 font-semibold text-[#1B4332]">

                  Delivery

                </h3>

                <p className="mt-2 text-sm text-gray-500">

                  Fast & Eco Friendly

                </p>

              </div>

            </div>

            {/* FARM INFO */}
            <div className="mt-8 bg-[#F7F4EE] rounded-4xl p-6 border border-[#ECECEC]">

              <div className="flex items-center gap-3">

                <Leaf className="w-5 h-5 text-[#2D6A4F]" />

                <h3 className="text-xl font-semibold text-[#1B4332]">

                  Farm Fresh Info

                </h3>

              </div>

              <div className="mt-6 space-y-5">

                {/* FARMER */}
                <div className="flex justify-between items-center">

                  <span className="text-gray-500 text-sm">
                    Farmer
                  </span>

                  <span className="font-medium text-[#1B4332]">

                    {product.farmer}

                  </span>

                </div>

                {/* LOCATION */}
                <div className="flex justify-between items-center gap-4">

                  <span className="text-gray-500 text-sm">
                    Location
                  </span>

                  <span className="font-medium text-[#1B4332] flex items-center gap-2 text-right">

                    <MapPin className="w-4 h-4" />

                    {product.location}

                  </span>

                </div>

                {/* FRESHNESS */}
                <div className="flex justify-between items-center">

                  <span className="text-gray-500 text-sm">
                    Freshness
                  </span>

                  <span className="font-medium text-[#2D6A4F]">

                    {product.freshness}

                  </span>

                </div>

              </div>

            </div>

            {/* NUTRITION */}
            <div className="mt-8">

              <h3 className="text-xl font-semibold text-[#1B4332]">

                Nutrition Benefits

              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {product.nutrition.map((item, index) => (

                  <div
                    key={index}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#E9F7EF]
                      text-[#2D6A4F]
                      text-sm
                      font-medium
                    "
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* REVIEWS */}
        <div className="mt-24">

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332]">

            Customer Reviews

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {reviews.map((review) => (

              <ReviewCard
                key={review.id}
                review={review}
              />

            ))}

          </div>

        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-24">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332]">

              Related Products

            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            {products
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (

                <ProductCard
                  key={item.id}
                  product={item}
                />

              ))}

          </div>

        </div>

      </Container>

    </section>
  );
};

export default ProductDetails;