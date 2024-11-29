import React from 'react';
import "../global.css";
import ReactDOMClient from "react-dom/client";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);

const Home = () => {
    root.render (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default Home;
