import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 font-['Inter']">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-red-50 rounded-full animate-bounce">
            <AlertCircle size={64} className="text-[#ff4d4d]" />
          </div>
        </div>

        <h1 className="text-[90px] sm:text-[120px] font-[900] text-[#1a2e35] leading-none mb-4 font-['Manrope']">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-[800] text-[#1a4a3e] mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 max-w-md mx-auto mb-10 font-medium">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#1a4a3e] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#143a31] transition-all shadow-lg hover:shadow-[#1a4a3e]/20 active:scale-95"
        >
          <Home size={22} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;