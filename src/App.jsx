import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import NavBar from "./Home/Home/NavBar"
import DotGroup from "./Home/Home/DotGroup"
import LandingPage from "./Home/LandingPage/LandingPage"
import LineGradient from "./Components/LineGradient"
import MySkills from "./Home/MySkills/MySkills"

function App() {
  // dictates in which page we are currently in
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  // manipulate the background color of navbar upon scrolling
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-deep-blue">
      {/* navbar */}
      <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {/* DotGroup NavBar */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        {/* LANDING PAGE */}
        <LandingPage setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      {/* SKILL PAGE */}
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

    </div>
  )
}

export default App
