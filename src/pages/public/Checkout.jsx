import { useNavigate } from "react-router-dom";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

import Container from "../../components/layout/Container";

import { useCart } from "../../context/CartContext";

const Checkout = () => {

  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <section className="pt-28 pb-16 bg-[#FCFCFA] min-h-screen">

      <Container>

        {/* TOP */}
        <div className="flex items-center justify-between flex-wrap gap-4">

          <div>

            <p className="text-sm text-[#2D6A4F] font-medium">

              FARM2CITY CHECKOUT

            </p>

            <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-[#1B4332]">

              Your Cart

            </h1>

          </div>

          <button
            onClick={() => navigate("/marketplace")}
            className="
              flex
              items-center
              gap-2
              px-5
              h-12
              rounded-2xl
              border border-[#ECECEC]
              bg-white
              hover:shadow-md
              transition-all
            "
          >

            <ArrowLeft className="w-4 h-4" />

            Continue Shopping

          </button>

        </div>

        {/* EMPTY */}
        {cartItems.length === 0 ? (

          <div className="mt-12 bg-white rounded-4xl p-10 text-center border border-[#ECECEC]">

            <div className="w-20 h-20 mx-auto rounded-full bg-[#E9F7EF] flex items-center justify-center">

              <ShoppingBag className="w-10 h-10 text-[#2D6A4F]" />

            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#1B4332]">

              Your Cart Is Empty

            </h2>

            <p className="mt-3 text-gray-500">

              Add fresh products from marketplace.

            </p>

            <button
              onClick={() => navigate("/marketplace")}
              className="
                mt-8
                px-8
                h-12
                rounded-2xl
                bg-[#2D6A4F]
                text-white
                font-medium
                hover:bg-[#24543F]
                transition-all
              "
            >

              Browse Marketplace

            </button>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-5">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-[28px]
                    p-5
                    border border-[#ECECEC]
                    flex
                    flex-col
                    sm:flex-row
                    gap-5
                    hover:shadow-lg
                    transition-all
                    duration-500
                  "
                >

                  {/* IMAGE */}
                  <div className="w-full sm:w-36 h-36 rounded-3xl overflow-hidden bg-[#F7F4EE]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="text-xs font-medium text-[#2D6A4F]">

                          {item.category}

                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-[#1B4332]">

                          {item.name}

                        </h2>

                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-red-50
                          flex
                          items-center
                          justify-center
                          text-red-500
                          hover:bg-red-100
                          transition-all
                        "
                      >

                        <Trash2 className="w-5 h-5" />

                      </button>

                    </div>

                    {/* PRICE */}
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-4">

                      <div>

                        <p className="text-3xl font-bold text-[#2D6A4F]">

                          ₹{item.price}

                        </p>

                        <span className="text-sm text-gray-400">

                          per kg

                        </span>

                      </div>

                      {/* QUANTITY */}
                      <div className="flex items-center bg-[#F7F4EE] rounded-2xl overflow-hidden border border-[#ECECEC]">

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              "decrease"
                            )
                          }
                          className="w-11 h-11 flex items-center justify-center hover:bg-gray-100 transition-all"
                        >

                          <Minus className="w-4 h-4" />

                        </button>

                        <span className="w-11 text-center font-semibold text-[#1B4332]">

                          {item.quantity}

                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              "increase"
                            )
                          }
                          className="w-11 h-11 flex items-center justify-center hover:bg-gray-100 transition-all"
                        >

                          <Plus className="w-4 h-4" />

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* RIGHT SIDE */}
            <div>

              <div className="bg-white rounded-[28px] p-6 border border-[#ECECEC] sticky top-32">

                <h2 className="text-2xl font-bold text-[#1B4332]">

                  Order Summary

                </h2>

                {/* SUMMARY */}
                <div className="mt-8 space-y-5">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">

                      Total Items

                    </span>

                    <span className="font-semibold text-[#1B4332]">

                      {cartItems.length}

                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">

                      Delivery

                    </span>

                    <span className="font-semibold text-[#2D6A4F]">

                      Free

                    </span>

                  </div>

                  <div className="border-t pt-5 flex items-center justify-between">

                    <span className="text-xl font-semibold text-[#1B4332]">

                      Total

                    </span>

                    <span className="text-3xl font-bold text-[#2D6A4F]">

                      ₹{subtotal}

                    </span>

                  </div>

                </div>

                {/* BUTTONS */}
                <div className="mt-8 space-y-4">

                  <button
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      bg-[#2D6A4F]
                      text-white
                      font-medium
                      hover:bg-[#24543F]
                      transition-all
                    "
                  >

                    Place Order

                  </button>

                  <button
                    onClick={clearCart}
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border border-[#ECECEC]
                      text-red-500
                      font-medium
                      hover:bg-red-50
                      transition-all
                    "
                  >

                    Clear Cart

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </Container>

    </section>
  );
};

export default Checkout;