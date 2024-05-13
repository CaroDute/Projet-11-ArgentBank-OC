import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./src/pages/Accueil";
import Login from "./src/pages/Login";
import User from "./src/pages/User";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/User" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
