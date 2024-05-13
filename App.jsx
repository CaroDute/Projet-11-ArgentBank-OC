import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Sign from "./pages/Sign";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/User" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
