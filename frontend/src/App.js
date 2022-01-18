import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminNavbar from './Components/AdminComponents/AdminNavbar'
import Home from './Pages/Home'
import Products from './Pages/Products';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';

import React, { useEffect, useState } from "react";
import axios from 'axios';

import {
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";



function App() {

    let isAdmin = true;
    let user = false;

    const [ adminPath, setAdminPath ] = useState("");
    const [ categories, setCategories ] = useState([]);

    
    let location = useLocation();

    useEffect(() => {
        setAdminPath(location.pathname.toString().includes("/admin"));
    }, [location]);

    useEffect(() => {
        const getCategories = async () => {
            try{
                const res = await axios.get(`http://localhost:5000/api/categories/`);
                setCategories(res.data)
            }
            catch(err){}
        };
        getCategories();
    },[]);

    return (
        <div className="App">
                {adminPath ? (isAdmin && <AdminNavbar/>) : <Navbar/>}
                    <Routes>
                        <Route path="*" element={<Home />} />
                        <Route path="/produkty/:category/:subcategory" element={<Products categories={categories}/>} />
                        <Route path="/produkty/pokaz/:parametr" element={<Products categories={categories}/>} />
                        <Route path="/produkt/:id" element={<Product />} />
                        <Route path="/zaloguj" element={user ? <Navigate to="/" /> : <Login />} />
                        <Route path="/zarejestruj" element={user ? <Navigate to="/" /> : <Register />} />
                        <Route path="/koszyk" element={<Cart />} />
                    </Routes>
                        {isAdmin && <Admin />}
                {!adminPath && <Footer/>}
        </div>
    );
}

export default App;