
import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

import Container from "../../components/layout/Container";
import ProductCard from "../../components/cards/ProductCard";

import { products } from "../../data/products";

const categories = [
  "All",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Grains",
  "Leafy Fresh",
];

const Marketplace = () => {

  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

const categoryFromURL =
  searchParams.get("category") || "All";

const [activeCategory, setActiveCategory] =
  useState("All");

useEffect(() => {
  setActiveCategory(categoryFromURL);
}, [categoryFromURL]);

  const [sortType, setSortType] =
    useState("default");

  // FILTER PRODUCTS
  let filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All"
        ? true
        : product.category === activeCategory;

    return matchesSearch && matchesCategory;

  });

  // SORTING
  if (sortType === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortType === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortType === "rating") {
    filteredProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <section className="pt-24 pb-14 bg-[#FCFCFA] min-h-screen">

      <Container>

        {/* HERO */}
        <div className="bg-[#2D6A4F] rounded-4xl p-7 lg:p-10 relative overflow-hidden">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#95D5B2] opacity-20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <p className="text-[#D8F3DC] font-medium text-xs tracking-wider">

              FARM FRESH MARKETPLACE

            </p>

            <h1 className="mt-3 text-3xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">

              Fresh From Farms
              <br />
              Delivered To Your City

            </h1>

            <p className="mt-4 text-white/70 max-w-2xl text-sm lg:text-base leading-relaxed">

              Explore vegetables, fruits, dairy and grains
              directly sourced from trusted farmers.

            </p>

          </div>

        </div>

        {/* SEARCH + FILTER */}
        <div className="mt-8 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

          {/* SEARCH */}
          <div className="flex items-center bg-white border border-[#ECECEC] rounded-2xl px-4 h-12 flex-1 shadow-sm">

            <Search className="w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search fresh products..."
              className="flex-1 h-full px-3 outline-none bg-transparent text-sm"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-3">

            {/* FILTER */}
            <button className="h-12 px-5 rounded-2xl bg-white border border-[#ECECEC] flex items-center gap-2 shadow-sm hover:shadow-md transition-all">

              <SlidersHorizontal className="w-4 h-4 text-[#1B4332]" />

              <span className="font-medium text-sm text-[#1B4332]">

                Filters

              </span>

            </button>

            {/* SORT */}
            <div className="relative">

              <select
                value={sortType}
                onChange={(e) =>
                  setSortType(e.target.value)
                }
                className="appearance-none h-12 px-5 pr-10 rounded-2xl border border-[#ECECEC] bg-white text-sm outline-none shadow-sm cursor-pointer"
              >

                <option value="default">
                  Sort By
                </option>

                <option value="low">
                  Price: Low to High
                </option>

                <option value="high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Top Rated
                </option>

              </select>

              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

            </div>

          </div>

        </div>

        {/* CATEGORY FILTERS */}
        <div className="mt-7 flex flex-wrap gap-3">

          {categories.map((category, index) => (

            <button
              key={index}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#2D6A4F] text-white shadow-lg"
                    : "bg-white text-[#1B4332] border border-[#ECECEC] hover:border-[#2D6A4F]"
                }
              `}
            >

              {category}

            </button>

          ))}

        </div>

        {/* TOP BAR */}
        <div className="mt-8 flex items-center justify-between">

          <h2 className="text-2xl lg:text-3xl font-bold text-[#1B4332]">

            Fresh Products

          </h2>

          <p className="text-gray-500 text-sm">

            {filteredProducts.length} Products

          </p>

        </div>

        {/* PRODUCTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((item) => (

              <ProductCard
                key={item.id}
                product={item}
              />

            ))

          ) : (

            <div className="col-span-full bg-white rounded-[28px] p-14 text-center shadow-sm border border-[#ECECEC]">

              <h3 className="text-2xl font-bold text-[#1B4332]">

                No Products Found

              </h3>

              <p className="mt-3 text-gray-500 text-sm">

                Try another keyword or category.

              </p>

            </div>

          )}

        </div>

      </Container>

    </section>
  );
};

export default Marketplace;