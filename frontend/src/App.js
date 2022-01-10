import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import Products from './Pages/Products';
import ProductDetails from './Components/ProductDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;