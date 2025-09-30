import { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
import TopCTA from "../components/TopCTA";

const Header = () => {
  const [hideCTA, setHideCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideCTA(true);
      } else {
        setHideCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="relative">
      <TopCTA hideCTA={hideCTA} />
      <MainNav hideCTA={hideCTA} />
    </header>
  );
};

export default Header;
