import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOAST UI */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#1B4332] text-white px-5 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          {toast}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);