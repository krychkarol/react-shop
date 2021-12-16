import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Categories from './Components/Categories';
import ProductList from './Components/ProductList';
import TitleBar from './Components/TitleBar';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Slider/>
            <Categories/>
            <TitleBar title='Najnowsze produkty' subtitle='Sprawdź nasze nowości !'/>
            <ProductList/>
            <Footer/>
        </div>
    );
}

export default App;