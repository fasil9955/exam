import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Course from "./Components/course";
import About from "./Components/About";
import NoPage from "./Components/Nopage";
const App=()=>{
  return(
    // <h1>Welcome to react Application</h1>
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;