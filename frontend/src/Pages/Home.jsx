import React from 'react';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';
import TitleBar from '../Components/TitleBar';

const Home = ({categories}) => {

    return (
        <div className='home'>
            <Slider/>
            <Categories categories={categories}/>
            <TitleBar title='Najnowsze produkty' subtitle='Sprawdź nasze nowości !'/>
            <ProductList category='New'/>
            {/* 
            TODO
            bestselery, promocje, itp

                NP:
                    <TitleBar title='Promocje' subtitle='Przecenione produkty'/>
                    <ProductList products='specialoffer'/>
            */}
        </div>
    )
}

export default Home
