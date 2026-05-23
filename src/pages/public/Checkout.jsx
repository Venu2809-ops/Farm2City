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
    <section
      className="
      pt-24
      sm:pt-28
      pb-12
      sm:pb-16
      bg-[#FCFCFA]
      min-h-screen"
    >

      <Container>

        {/* TOP */}

        <div className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-5">

          <div>

            <p className="
            text-xs
            sm:text-sm
            text-[#2D6A4F]
            font-medium">

              FARM2CITY CHECKOUT

            </p>

            <h1 className="
            mt-2
            text-3xl
            sm:text-5xl
            font-bold
            text-[#1B4332]">

              Your Cart

            </h1>

          </div>


          <button
            onClick={() =>
              navigate("/marketplace")
            }

            className="
            flex
            items-center
            justify-center
            gap-2
            px-5
            h-12
            w-full
            sm:w-auto
            rounded-2xl
            border
            border-[#ECECEC]
            bg-white"
          >

            <ArrowLeft className="w-4 h-4"/>

            Continue Shopping

          </button>

        </div>



        {/* EMPTY */}

        {cartItems.length === 0 ? (

          <div className="
          mt-12
          bg-white
          rounded-[28px]
          p-8
          sm:p-10
          text-center
          border
          border-[#ECECEC]">

            <div className="
            w-18 h-18
            sm:w-20 sm:h-20
            mx-auto
            rounded-full
            bg-[#E9F7EF]
            flex
            items-center
            justify-center">

              <ShoppingBag
                className="
                w-8 h-8
                sm:w-10 sm:h-10
                text-[#2D6A4F]"
              />

            </div>

            <h2 className="
            mt-6
            text-2xl
            sm:text-3xl
            font-bold
            text-[#1B4332]">

              Your Cart Is Empty

            </h2>

            <p className="
            mt-3
            text-sm
            sm:text-base
            text-gray-500">

              Add fresh products from marketplace.

            </p>

          </div>

        ) : (

          <div className="
          grid
          lg:grid-cols-3
          gap-8
          mt-10">


            {/* LEFT */}

            <div className="
            lg:col-span-2
            space-y-5">

              {cartItems.map((item)=>(

                <div

                key={item.id}

                className="
                bg-white
                rounded-[28px]
                p-4
                sm:p-5
                border
                border-[#ECECEC]
                flex
                flex-col
                sm:flex-row
                gap-5">

                  {/* IMAGE */}

                  <div className="
                  w-full
                  sm:w-32
                  md:w-36
                  h-48
                  sm:h-32
                  md:h-36
                  rounded-3xl
                  overflow-hidden">

                    <img

                    src={item.image}

                    alt={item.name}

                    className="
                    w-full
                    h-full
                    object-cover"

                    />

                  </div>



                  {/* CONTENT */}

                  <div className="flex-1">

                    <div className="
                    flex
                    justify-between
                    gap-4">

                      <div>

                        <p className="
                        text-xs
                        text-[#2D6A4F]">

                          {item.category}

                        </p>

                        <h2 className="
                        mt-1
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-[#1B4332]">

                          {item.name}

                        </h2>

                      </div>


                      <button

                      onClick={()=>
                      removeFromCart(
                        item.id
                      )}

                      className="
                      w-10 h-10
                      rounded-xl
                      bg-red-50
                      flex
                      items-center
                      justify-center">

                        <Trash2
                        className="w-5 h-5"
                        />

                      </button>

                    </div>



                    {/* PRICE */}

                    <div className="
                    mt-5
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-4">

                      <div>

                        <p className="
                        text-2xl
                        sm:text-3xl
                        font-bold
                        text-[#2D6A4F]">

                          ₹{item.price}

                        </p>

                        <span className="
                        text-sm
                        text-gray-400">

                          per kg

                        </span>

                      </div>



                      {/* QUANTITY */}

                      <div className="
                      flex
                      items-center
                      bg-[#F7F4EE]
                      rounded-2xl
                      overflow-hidden">

                        <button

                        onClick={()=>
                        updateQuantity(
                        item.id,
                        "decrease"
                        )}

                        className="
                        w-11 h-11">

                          <Minus
                          className="mx-auto w-4 h-4"
                          />

                        </button>

                        <span className="
                        w-11
                        text-center">

                          {item.quantity}

                        </span>

                        <button

                        onClick={()=>
                        updateQuantity(
                        item.id,
                        "increase"
                        )}

                        className="
                        w-11 h-11">

                          <Plus
                          className="mx-auto w-4 h-4"
                          />

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>



            {/* SUMMARY */}

            <div>

              <div className="
              bg-white
              rounded-[28px]
              p-6
              border
              border-[#ECECEC]
              lg:sticky
              lg:top-28">

                <h2 className="
                text-2xl
                font-bold
                text-[#1B4332]">

                  Order Summary

                </h2>


                <div className="
                mt-8
                space-y-5">

                  <div className="
                  flex
                  justify-between">

                    <span>
                    Total Items
                    </span>

                    <span>
                    {cartItems.length}
                    </span>

                  </div>


                  <div className="
                  flex
                  justify-between">

                    <span>
                    Delivery
                    </span>

                    <span>
                    Free
                    </span>

                  </div>


                  <div className="
                  border-t
                  pt-5
                  flex
                  justify-between">

                    <span className="
                    text-lg
                    sm:text-xl
                    font-semibold">

                      Total

                    </span>

                    <span className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-[#2D6A4F]">

                      ₹{subtotal}

                    </span>

                  </div>

                </div>



                {/* BUTTONS */}

                <div className="
                mt-8
                space-y-4">

                  <button
                  className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-[#2D6A4F]
                  text-white">

                    Place Order

                  </button>


                  <button

                  onClick={clearCart}

                  className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  text-red-500">

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