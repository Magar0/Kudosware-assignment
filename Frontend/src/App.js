import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Success from "./pages/Success";
import Resume from "./pages/Resume";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarComponent />}>
        <Route index element={<Resume />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
