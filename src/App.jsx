import { useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import NavBar from "./Home/Home/NavBar"


function App() {
  // dictates in which page we are currently in
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <div className="bg-deep-blue">

      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} ></NavBar>

    </div>
  )
}

export default App
