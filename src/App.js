import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SinglePage from "./pages/SinglePage";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/singleshow/:id" element={<SinglePage/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
