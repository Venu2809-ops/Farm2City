import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const addToCart = (product, quantity) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>

        item.id === product.id
          ? {
              ...item,
              quantity:
                item.quantity + quantity,
            }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);

    }

  };

  // REMOVE ITEM
  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };

  // UPDATE QUANTITY
  const updateQuantity = (id, type) => {

    const updatedCart = cartItems.map((item) => {

      if (item.id === id) {

        if (
          type === "decrease" &&
          item.quantity > 1
        ) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        if (type === "increase") {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

      }

      return item;

    });

    setCartItems(updatedCart);

  };

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
      }}
    >

      {children}

    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);