import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";


// custom navlink manipulating function to highlight the current navlink

const NavLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()

  return (<AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
    {page}
  </AnchorLink>)
}

const NavBar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  // check whether the user device screen is above small screen size
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)")

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>

      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AJ</h4>

        {/* Desktop Nav */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {/* home */}
            <NavLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {/* skills */}
            <NavLink page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {/* projects */}
            <NavLink page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {/* recognition */}
            <NavLink page="Recognition" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {/* contact */}
            <NavLink page="contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>) : (<div></div>)}
      </div>

    </nav>
  );
};

export default NavBar;