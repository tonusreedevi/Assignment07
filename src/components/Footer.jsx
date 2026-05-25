import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a3a32] text-white mt-10 px-5 sm:px-8 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>

        <p className="max-w-2xl text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend,
          and nurture the relationships that matter most.
        </p>

        <div className="mb-10 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-white">Social Links</h3>

          <div className="flex gap-4">
            <a href="#" className="bg-white p-2.5 rounded-full text-[#1a3a32] hover:bg-gray-200 transition-all shadow-md flex items-center justify-center">
              <FaInstagram size={20} />
            </a>

            <a href="#" className="bg-white p-2.5 rounded-full text-[#1a3a32] hover:bg-gray-200 transition-all shadow-md flex items-center justify-center">
              <FaFacebookF size={20} />
            </a>

            <a href="#" className="bg-white p-2.5 rounded-full text-[#1a3a32] hover:bg-gray-200 transition-all shadow-md flex items-center justify-center">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;