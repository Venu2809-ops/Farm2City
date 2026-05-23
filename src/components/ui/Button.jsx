const Button = ({
  children,
  variant = "primary",
  className = "",
}) => {

  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#2D6A4F] text-white hover:scale-105 hover:bg-[#1B4332]",

    secondary:
      "bg-white text-[#2D6A4F] border border-[#2D6A4F] hover:bg-[#F0FDF4]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;