import { Mail, Phone } from "lucide-react";

type Props = {
  hideCTA: boolean;
};

const TopCTA = ({ hideCTA }: Props) => {
  return (
    <div
      id="contact"
      className={`fixed top-0 left-0 w-full z-50 flex md:flex-row md:gap-10 md:items-center  gap-4 bg-[#1d2b28]  text-white py-2 px-4  transform transition-all duration-500 origin-top ${
        hideCTA ? "opacity-100 rotate-x-0" : "opacity-0 -rotate-x-90"
      } bg-[#1d2b28]`}
    >
      <div className="flex md:hidden items-center gap-4">
        <div className="bg-yellow-600 w-10 h-10 rounded flex items-center justify-center">
          <span className="text-white font-bold">K</span>
        </div>
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
