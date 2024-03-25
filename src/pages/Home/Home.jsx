import React, { useState } from 'react';
import "./Home.css";
import Header from '../../components/Header/Header';
import ExplorMenu from '../../components/ExplorMenu/ExplorMenu';

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <ExplorMenu category={category} setCategory={setCategory} />
        </div>
    )
}

export default Home