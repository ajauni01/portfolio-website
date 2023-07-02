import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import NavBar from "./Home/Home/NavBar"
import DotGroup from "./Home/Home/DotGroup"


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
      <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} ></NavBar>
      {/* DotGroup NavBar */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
      </div>


    </div>
  )
}

export default App
