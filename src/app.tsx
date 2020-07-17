import React from 'react';
import S from "./app.module.scss";
import Advisors from "./components/advisors/advisors";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Features from "./components/features/features"
import Story from "./components/stories/story";
import Beach from './components/beach/beach';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';

function App() {

    return (
            <div className={S.container}>
                <Sidebar />
                <Header />
                <Advisors />
                <Features />
                <Story />
                <Beach />
                <Gallery />
                <Footer />
            </div>
    )
}

export default App;


