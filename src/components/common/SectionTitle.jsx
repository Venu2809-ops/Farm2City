const SectionTitle = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div className={`mb-10 text-${align}`}>
      <h2 className="text-4xl font-semibold text-[#1B4332]">
        {title}
      </h2>

      <p className="mt-3 text-gray-600 max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;