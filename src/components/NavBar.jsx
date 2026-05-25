import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Clock, LineChart, Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
      isActive
        ? "bg-[#1a4a3e] text-white shadow-md"
        : "text-gray-500 hover:bg-gray-100"
    }`;

  const mobileLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-4 font-bold transition-all ${
      isActive
        ? "bg-[#1a4a3e]/10 text-[#1a4a3e] border-r-4 border-[#1a4a3e]"
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-[#1a2e35]">Keen</span>
          <span className="text-[#2d4f3e]">Keeper</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={desktopLinkStyle}>
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/timeline" className={desktopLinkStyle}>
            <Clock size={20} />
            <span>Timeline</span>
          </NavLink>

          <NavLink to="/stats" className={desktopLinkStyle}>
            <LineChart size={20} />
            <span>Stats</span>
          </NavLink>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] sm:w-[300px] bg-white z-50 shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-8">
          <div className="px-6 mb-10">
            <h2 className="text-xl font-bold text-[#1a2e35]">Menu</h2>
          </div>

          <NavLink
            to="/"
            className={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            <Home size={22} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/timeline"
            className={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            <Clock size={22} />
            <span>Timeline</span>
          </NavLink>

          <NavLink
            to="/stats"
            className={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            <LineChart size={22} />
            <span>Stats</span>
          </NavLink>

          <div className="mt-auto px-6 pt-6 border-t text-center">
            <p className="text-xs text-gray-400">KeenKeeper v1.0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;