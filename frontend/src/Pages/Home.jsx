import React from 'react';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';
import TitleBar from '../Components/TitleBar';

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <Categories/>
            <TitleBar title='Najnowsze produkty' subtitle='Sprawdź nasze nowości !'/>
            <ProductList/>
        </div>
    )
}

export default Home
