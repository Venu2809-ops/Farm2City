import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

const BackToTop = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-2xl
        bg-[#2D6A4F] text-white
        flex items-center justify-center
        shadow-xl transition-all duration-300
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >

      <ChevronUp className="w-5 h-5" />

    </button>
  );
};

export default BackToTop;