import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import About from "./pages/About.jsx";
import Hackathon from "./pages/Hackathon.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/hackathon" element={<Hackathon />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
