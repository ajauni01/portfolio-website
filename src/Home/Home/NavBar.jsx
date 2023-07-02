import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuIcon from "../../assets/menu-icon.svg"
import closeIcon from "../../assets/close-icon.svg"



// custom navlink manipulating function to highlight the current navlink
const NavLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()
  console.log('updated selected page', selectedPage)

  return (<AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
    {page}
  </AnchorLink>)
}

const NavBar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  // check whether the user device screen is above small screen size
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)")

  // menu items function
  const menuItems = () => <>
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
  </>

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>

      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AJ</h4>

        {/* Desktop Nav */}
        {isAboveSmallScreen ? (
          // Desktop Nav
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {menuItems()}
          </div>
        ) : (
          // if the screen is not a desktop screen
          <button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img src={menuIcon} alt="menu-icon" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {
          !isAboveSmallScreen && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
              {/* CLOSE ICON */}
              <div className="flex justify-end p-10">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img className="h-[40px]" src={closeIcon} alt="close-icon" />
                </button>
              </div>
              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl  text-deep-blue">
                {menuItems()}
              </div>
            </div>)
        }

      </div>
    </nav>
  );
};

export default NavBar;