import { useEffect } from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  // 🚀 FIX: body scroll + reset scroll position issue
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0 }); // IMPORTANT FIX
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40 transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[380px] bg-white z-50 shadow-2xl
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b flex-shrink-0">
          <h2 className="text-xl font-bold text-[#1B4332]">
            Your Cart
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* CART ITEMS (ONLY THIS SCROLLS) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b pb-4"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-sm">
                    {item.name}
                  </h3>

                  <p className="text-[#2D6A4F] font-bold">
                    ₹{item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, "decrease")
                      }
                      className="p-1"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, "increase")
                      }
                      className="p-1"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="flex-shrink-0 border-t p-5 bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-[#2D6A4F]">
              ₹{subtotal}
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
            className="w-full bg-[#2D6A4F] text-white py-3 rounded-xl hover:bg-[#24543F] transition"
          >
            Checkout
          </button>
        </div>

      </div>
    </>
  );
};

export default CartDrawer;