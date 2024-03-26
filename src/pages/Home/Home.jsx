import React, { useState } from 'react';
import "./Home.css";
import Header from '../../components/Header/Header';
import ExplorMenu from '../../components/ExplorMenu/ExplorMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Download from '../../components/Download/Download';

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <ExplorMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} setCategory={setCategory} />
            <Download />
        </div>
    )
}

export default Home