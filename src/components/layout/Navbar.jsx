import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

import CartDrawer from "../cart/CartDrawer";
import { useCart } from "../../context/CartContext";

import {
  Menu,
  X,
  Search,
  ShoppingCart,
} from "lucide-react";

import Container from "./Container";
import { products } from "../../data/products";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Farmers", path: "/farmers" },
  { name: "Impact", path: "/impact" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // 🔥 SEARCH STATES (NEW)
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔎 FILTER PRODUCTS
  const filteredProducts =
    searchText.trim() === ""
      ? []
      : products.filter((p) =>
          p.name.toLowerCase().includes(searchText.toLowerCase())
        );

  // 🔥 SEARCH HANDLER
  const handleSearchSelect = (product) => {
    setSearchOpen(false);
    setSearchText("");
    navigate(`/product/${product.id}`);
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      if (filteredProducts.length > 0) {
        handleSearchSelect(filteredProducts[0]);
      } else {
        alert("Product not found");
      }
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm py-4"
            : "bg-transparent py-6"
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-3xl font-bold text-[#1B4332]">
            Farm2City
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`relative font-medium transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "text-[#2D6A4F] font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-2 h-0.5 bg-[#2D6A4F] transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">

            {/* SEARCH BUTTON */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <Search className="w-5 h-5 text-[#1B4332]" />
            </button>

            {/* CART */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 text-[#1B4332]" />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#2D6A4F] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* 🔥 SEARCH DROPDOWN */}
      {searchOpen && (
        <div className="absolute top-20 left-0 w-full flex justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-4 w-[90%] max-w-xl">

            <input
              autoFocus
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearchEnter}
              placeholder="Search products..."
              className="w-full border px-4 py-3 rounded-xl outline-none"
            />

            {/* RESULTS */}
            <div className="mt-3 max-h-60 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSearchSelect(p)}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                  >
                    {p.name}
                  </div>
                ))
              ) : searchText ? (
                <p className="text-sm text-red-500 p-2">
                  Product not found
                </p>
              ) : null}
            </div>

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-500
          ${mobileMenu ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-4 mt-4 bg-white rounded-4xl p-8 shadow-xl">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
};

export default Navbar;