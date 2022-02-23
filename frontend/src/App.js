import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminNavbar from './Components/AdminComponents/AdminNavbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';
import Summary from './Pages/Summary';
import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    Navigate,
    useLocation
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { publicReq } from './request';


function App() {

    let location = useLocation();

    const user = useSelector(state => state.user.currentUser);
    const isAdmin = useSelector(state => state.user.currentUser?.isAdmin);

    const [ adminPath, setAdminPath ] = useState("");
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        setAdminPath(location.pathname.toString().includes("/admin"));
    }, [location]);

    useEffect(() => {
        const getCategories = async () => {
            try{
                const res = await publicReq.get("categories/");
                setCategories(res.data.sort((a, b) => a.order - b.order));
            }
            catch(err){}
        };
        getCategories();
    },[]);

    return (
        <div className="App">
                {adminPath ? (isAdmin ? <AdminNavbar/> : <Navigate to="/" />) : <Navbar categories={categories}/>}
                    <Routes>
                        <Route path="/" element={<Home categories={categories} />} />
                        <Route path="/produkty/:category/:subcategory" element={<Products categories={categories}/>} />
                        <Route path="/produkty/pokaz/:parametr" element={<Products categories={categories}/>} />
                        <Route path="/produkt/:id" element={<Product />} />
                        <Route path="/zaloguj" element={user ? <Navigate to="/" /> : <Login />} />
                        <Route path="/zarejestruj" element={user ? <Navigate to="/" /> : <Register />} />
                        <Route path="/koszyk" element={<Cart />} />
                        <Route path="/podsumowanie" element={<Summary/>} />
                        <Route path="*" element={<></>} />
                    </Routes>
                        {isAdmin && <Admin categories={categories} />}
                {adminPath ? <div></div> : <Footer/>}
        </div>
    );
}

export default App;
