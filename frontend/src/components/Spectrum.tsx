const Spectrum = () => {
  return (
    <div className="mt-12 w-full">
      {/* Spectrum Bar */}
      <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-red-600 via-gray-400 to-blue-600 shadow-lg">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 via-purple-400/30 to-blue-400/30 blur-sm"></div>
      </div>
      
      {/* Labels */}
      <div className="flex justify-between mt-4 px-2">
        <div className="text-left">
          <span className="text-red-600 font-semibold text-lg">Left</span>
        </div>
        <div className="text-center">
          <span className="text-foreground font-semibold text-lg">Center</span>
        </div>
        <div className="text-right">
          <span className="text-blue-600 font-semibold text-lg">Right</span>
        </div>
      </div>
    </div>
  );
};

export default Spectrum;
