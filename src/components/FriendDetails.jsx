import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Phone, MessageSquare, Video, Bell, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const FriendDetails = ({ friends, onAction }) => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const friend = friends?.find((f) => f.id == id);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [id]);

  const handleAction = (type, name) => {
    onAction(type, name);
    toast.success(`${type} with ${name} logged!`, {
      style: {
        borderRadius: "12px",
        background: "#1a4a3e",
        color: "#fff",
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-32 sm:py-40">
        <div className="w-10 h-10 border-4 border-[#1a4a3e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!friend)
    return (
      <div className="p-10 sm:p-20 text-center font-inter text-sm sm:text-base">
        Friend not found!
      </div>
    );

  return (
    <div className="max-w-[1100px] mx-auto p-3 sm:p-6 md:p-8 bg-[#f8fafc] font-['Inter']">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-4 space-y-4">

          {/* Profile Card */}
          <div className="bg-white p-5 sm:p-6 rounded-[20px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img
              src={friend?.picture}
              alt={friend?.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover border-4 border-white shadow-sm"
            />

            <h2 className="text-[18px] sm:text-[22px] font-[800] text-[#1a2e35] mb-2 font-['Manrope']">
              {friend?.name}
            </h2>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-[#ff4d4d] text-white px-3 py-1 rounded-full text-[10px] font-[800] uppercase">
                {friend?.status}
              </span>
              <span className="bg-[#dcfce7] text-[#166534] px-3 py-1 rounded-full text-[10px] font-[800] uppercase">
                {friend?.tags?.[0]}
              </span>
            </div>

            <p className="text-[#64748b] italic text-[13px] sm:text-[14px]">
              "Former colleague, great mentor"
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            <button className="w-full bg-white py-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-3 text-[#1a2e35] font-[700] text-[13px] hover:bg-gray-50 transition-all">
              <Bell size={16} /> Snooze 2 Weeks
            </button>

            <button className="w-full bg-white py-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-3 text-[#ff4d4d] font-[700] text-[13px] hover:bg-red-50 transition-all">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">

            <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-gray-100 shadow-sm">
              <h4 className="text-[28px] sm:text-[36px] font-[800] text-[#1a4a3e] mb-2">
                {friend?.days_since_contact}
              </h4>
              <p className="text-[#64748b] text-[11px] sm:text-[12px] font-[600]">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-gray-100 shadow-sm">
              <h4 className="text-[28px] sm:text-[36px] font-[800] text-[#1a4a3e] mb-2">
                30
              </h4>
              <p className="text-[#64748b] text-[11px] sm:text-[12px] font-[600]">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-gray-100 shadow-sm flex flex-col justify-center">
              <h4 className="text-[16px] sm:text-[20px] font-[800] text-[#1a4a3e]">
                Feb 27, 2026
              </h4>
              <p className="text-[#64748b] text-[11px] sm:text-[12px] font-[600]">
                Next Due
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white p-5 sm:p-6 rounded-[20px] border border-gray-100 shadow-sm">
            <h3 className="text-[#1a2e35] text-[15px] sm:text-[16px] font-[800] mb-5 sm:mb-6 font-['Manrope']">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

              <button
                onClick={() => handleAction("Call", friend?.name)}
                className="py-5 sm:py-6 bg-[#f8fafc] rounded-[15px] flex flex-col items-center gap-2 sm:gap-3 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
              >
                <Phone className="text-[#1a2e35]" size={22} />
                <span className="text-[#1a2e35] font-[700] text-[12px] sm:text-[13px]">
                  Call
                </span>
              </button>

              <button
                onClick={() => handleAction("Text", friend?.name)}
                className="py-5 sm:py-6 bg-[#f8fafc] rounded-[15px] flex flex-col items-center gap-2 sm:gap-3 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
              >
                <MessageSquare className="text-[#1a2e35]" size={22} />
                <span className="text-[#1a2e35] font-[700] text-[12px] sm:text-[13px]">
                  Text
                </span>
              </button>

              <button
                onClick={() => handleAction("Video", friend?.name)}
                className="py-5 sm:py-6 bg-[#f8fafc] rounded-[15px] flex flex-col items-center gap-2 sm:gap-3 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
              >
                <Video className="text-[#1a2e35]" size={22} />
                <span className="text-[#1a2e35] font-[700] text-[12px] sm:text-[13px]">
                  Video
                </span>
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails; 