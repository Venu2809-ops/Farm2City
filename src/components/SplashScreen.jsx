import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const SplashScreen = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);

      setTimeout(() => {
        onFinish();
      }, 600);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 flex flex-col items-center justify-center
        bg-[#E9F7EF] transition-opacity duration-700
        ${fade ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* ICON */}
      <div className="animate-bounce">
        <Leaf size={60} className="text-[#2D6A4F]" />
      </div>

      {/* TEXT */}
      <h1 className="mt-4 text-3xl font-bold text-[#1B4332]">
        Farm2City
      </h1>

      <p className="text-gray-500 mt-2">
        Fresh from farm loading...
      </p>
    </div>
  );
};

export default SplashScreen;