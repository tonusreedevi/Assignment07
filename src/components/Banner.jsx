import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <section className="w-full bg-[#f9fafb] px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-tight">
            Friends to keep close in your life
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend,
            and nurture the relationships that matter most.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="inline-flex items-center gap-2 bg-[#2d4f3e] hover:bg-[#233f32] transition-all duration-300 text-white font-semibold px-5 sm:px-6 py-3 rounded-xl shadow-md">
            <Plus size={20} />
            <span>Add a Friend</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Banner;