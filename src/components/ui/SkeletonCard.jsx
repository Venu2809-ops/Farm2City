const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white rounded-[28px] p-4 border border-[#ECECEC]">

      <div className="h-52 rounded-2xl bg-gray-200"></div>

      <div className="mt-5 h-5 bg-gray-200 rounded w-3/4"></div>

      <div className="mt-3 h-4 bg-gray-100 rounded w-1/2"></div>

      <div className="mt-6 h-10 bg-gray-200 rounded-xl"></div>

    </div>
  );
};

export default SkeletonCard;