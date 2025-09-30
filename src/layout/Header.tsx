import { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
import TopCTA from "../components/TopCTA";

const Header = () => {
  const [showCTA, setShowCTA] = useState(true); //CTA is visible at first

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowCTA(false); // hide CTA after scrolling
      } else {
        setShowCTA(true); // show CTA near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="h-[18vh]">
      <TopCTA showCTA={showCTA} />
      <MainNav showCTA={showCTA} />
    </header>
  );
};

export default Header;
