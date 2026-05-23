import { useEffect, useState } from "react";
import {
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";

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
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const { cartItems } = useCart();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchText, setSearchText] =
    useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const filteredProducts =
    searchText.trim() === ""
      ? []
      : products.filter((p) =>
          p.name
            .toLowerCase()
            .includes(
              searchText.toLowerCase()
            )
        );

  const handleSearchSelect = (
    product
  ) => {
    setSearchOpen(false);
    setSearchText("");

    navigate(
      `/product/${product.id}`
    );
  };

  const handleSearchEnter = (
    e
  ) => {
    if (
      e.key === "Enter" &&
      filteredProducts.length > 0
    ) {
      handleSearchSelect(
        filteredProducts[0]
      );
    }
  };

  return (
    <header
      className={`
      fixed top-0 left-0
      w-full z-50
      transition-all duration-500

      ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-4 sm:py-6"
      }
    `}
    >

      <Container>

        <div className="
        flex
        items-center
        justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-[#1B4332]"
          >

            Farm2City

          </Link>


          {/* DESKTOP NAV */}

          <nav className="
          hidden
          lg:flex
          items-center
          gap-10">

            {navLinks.map(
              (link, index) => (

                <Link
                  key={index}
                  to={link.path}

                  className={`
                  relative
                  font-medium
                  group

                  ${
                    location.pathname ===
                    link.path

                      ? "text-[#2D6A4F]"

                      : "text-gray-700"
                  }

                `}
                >

                  {link.name}

                </Link>

              )
            )}

          </nav>


          {/* RIGHT SIDE */}

          <div className="
          flex
          items-center
          gap-2
          sm:gap-4">

            {/* SEARCH */}

            <button
              onClick={() =>
                setSearchOpen(
                  !searchOpen
                )
              }

              className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-xl
              sm:rounded-2xl
              bg-white
              shadow-sm
              flex
              items-center
              justify-center"
            >

              <Search className="
              w-5 h-5
              text-[#1B4332]"
              />

            </button>


            {/* CART */}

            <button
              onClick={() =>
                setIsCartOpen(true)
              }

              className="
              relative
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-xl
              sm:rounded-2xl
              bg-white
              shadow-sm
              flex
              items-center
              justify-center"
            >

              <ShoppingCart
                className="
                w-5 h-5
                text-[#1B4332]"
              />

              {cartItems.length >
                0 && (

                <span
                  className="
                  absolute
                  -top-2
                  -right-2
                  bg-[#2D6A4F]
                  text-white
                  text-[10px]
                  sm:text-xs
                  w-5 h-5
                  rounded-full
                  flex
                  items-center
                  justify-center"
                >

                  {
                    cartItems.length
                  }

                </span>

              )}

            </button>


            {/* MENU */}

            <button
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }

              className="
              lg:hidden
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-xl
              bg-white
              shadow-sm
              flex
              items-center
              justify-center"
            >

              {mobileMenu ? (
                <X />
              ) : (
                <Menu />
              )}

            </button>

          </div>

        </div>

      </Container>



      {/* SEARCH DROPDOWN */}

      {searchOpen && (

        <div className="
        absolute
        top-18
        sm:top-22
        left-0
        w-full
        px-4
        flex
        justify-center">

          <div className="
          bg-white
          rounded-2xl
          shadow-xl
          p-4
          w-full
          max-w-xl">

            <input
              autoFocus

              value={searchText}

              onChange={(e)=>
                setSearchText(
                  e.target.value
                )
              }

              onKeyDown={
                handleSearchEnter
              }

              placeholder="
              Search products..."

              className="
              w-full
              px-4
              py-4
              border
              rounded-xl
              text-base
              outline-none"
            />

          </div>

        </div>

      )}



      {/* MOBILE MENU */}

      <div
        className={`
        lg:hidden
        overflow-hidden
        transition-all

        ${
          mobileMenu

            ? "max-h-[500px] opacity-100"

            : "max-h-0 opacity-0"
        }
      `}
      >

        <div className="
        mx-4
        mt-4
        bg-white
        rounded-3xl
        p-6
        shadow-xl">

          <nav className="
          flex
          flex-col
          gap-5">

            {navLinks.map(
              (link,index)=>(

                <Link

                key={index}

                to={link.path}

                onClick={()=>
                  setMobileMenu(
                    false
                  )
                }

                className="
                text-base
                font-medium
                text-gray-700">

                {link.name}

                </Link>

              )
            )}

          </nav>

        </div>

      </div>



      <CartDrawer
        isOpen={isCartOpen}

        onClose={() =>
          setIsCartOpen(false)
        }
      />

    </header>
  );
};

export default Navbar;