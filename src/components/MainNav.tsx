import { Menu } from "lucide-react";

const MainNav = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#pages", label: "Pages" },
    { href: "#news", label: "News" },
    { href: "#contact", label: "Contact Us" },
  ];
  return (
    <div className="flex items-center justify-between px-20 py-3 bg-[#1d2b28] text-white">
      <div className="hidden md:flex items-center gap-4">
        <img src="" alt="kitchen-renolvation" />
        <div>
          <h3>Kitchnox</h3>
          <h3>Modular Kitchen</h3>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            href={item.href}
            className="hover:text-[#b1803b] transition-all duration-300 ease-in-out"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex bg-rose-500 md:hidden">
        <Menu className="text-white" />
      </div>
    </div>
  );
};

export default MainNav;
