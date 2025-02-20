import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/home"
import { AboutPage } from "./pages/about"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":session/home" element={<HomePage />} />
        <Route path=":session/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
