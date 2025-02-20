import { HashRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/home"
import { AboutPage } from "./pages/about"

function App() {
  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="match" element={<HomePage />} />
        <Route path=":session/home" element={<HomePage />} />
        <Route path=":session/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
