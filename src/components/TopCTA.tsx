import { Mail, Phone } from "lucide-react";

const TopCTA = () => {
  return (
    <div className="flex md:flex-row md:gap-10 md:items-center  gap-4 bg-[#1d2b28] text-white py-2 px-4">
      <div className="flex md:hidden items-center gap-4">
        <img src="" alt="kitchen-renolvation" />
        <div>
          <h3>Kitchnox</h3>
          <h3>Modular Kitchen</h3>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-4">
          <span>
            <Phone className="text-[#b1803b] size-5" />
          </span>
          <a href="" className="hover:text-[#b1803b] cursor-pointer">
            {" "}
            Call for help (+254 115450287)
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span>
            <Mail className="text-[#b1803b] size-5" />
          </span>
          <a href="" className="hover:text-[#b1803b] cursor-pointer">
            {" "}
            Book an appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopCTA;
