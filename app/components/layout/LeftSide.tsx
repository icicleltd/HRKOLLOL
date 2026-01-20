import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className="fixed left-8 top-0 h-screen z-50 flex items-center">
      <div className="flex flex-col items-center text-white gap-5">

        {/* Top Line */}
        <span className="w-px h-24 bg-white/40" />

        <FaFacebookF size={14} className="opacity-80 hover:opacity-100 transition" />
        <FaTwitter size={14} className="opacity-80 hover:opacity-100 transition" />
        <FaInstagram size={14} className="opacity-80 hover:opacity-100 transition" />
        <FaLinkedinIn size={14} className="opacity-80 hover:opacity-100 transition" />
        <FaYoutube size={14} className="opacity-80 hover:opacity-100 transition" />

        {/* Bottom Line */}
        <span className="w-px h-24 bg-white/40" />
      </div>
    </div>
  );
};

export default LeftSide;
