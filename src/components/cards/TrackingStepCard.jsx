const TrackingStepCard = ({ step, active }) => {
  return (
    <div className="relative flex gap-5">

      {/* TIMELINE */}
      <div className="flex flex-col items-center">

        {/* DOT */}
        <div
          className={`
            w-6 h-6 rounded-full z-10
            ${active
              ? "bg-[#2D6A4F]"
              : "bg-gray-300"}
          `}
        />

        {/* LINE */}
        <div className="w-0.5 flex-1 bg-gray-200 mt-2"></div>

      </div>

      {/* CONTENT */}
      <div className="pb-12">

        <div className="flex items-center gap-4">

          <h3 className="text-xl font-semibold text-[#1B4332]">

            {step.title}

          </h3>

          <span className="text-sm text-gray-400">

            {step.time}

          </span>

        </div>

        <p className="mt-2 text-gray-600 leading-relaxed">

          {step.description}

        </p>

      </div>

    </div>
  );
};

export default TrackingStepCard;