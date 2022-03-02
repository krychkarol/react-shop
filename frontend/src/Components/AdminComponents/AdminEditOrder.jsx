import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getProducts, updateOrder} from '../../Redux/api';
import TitleBar from '../TitleBar';

const AdminEditOrder = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();

    let location = useLocation();
    const orderId = location.pathname.split('/')[3];

    const order = useSelector(state => state.admin.order.orders.find(item => item._id === orderId));
    const products = useSelector(state => state.admin.product.products);

    const [ orderedProducts, setOrderedProducts ] = useState([]); // USTAQWIC PRODUKTY Z ZAMOWIENIA I ZROBIC LISTE Z PRAWEJ

    const [ inputs, setInputs ] = useState({
        userId: order.userId,
        amount: order.amount,
        adress: order.adress,
        status: order.status,
    });

    const handleChange = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    };

    const handleUpdate = async (id, order) => {
        await updateOrder(id, order, dispatch);
        navigate('/admin/zamowienia');
    };

    const status = ["Oczekuje", "W trakcie realizacji", "Zakończone", "Anulowane"];

    useEffect(() => {
        getProducts(dispatch)
    },[dispatch]);

    useEffect(() => {
        order.products.map(product => (
            setOrderedProducts(prev => ([...prev, {product: products.find(item => item._id === product.productId), qty: product.qty}]))
        ))// eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        // SCSS => _adminProduct 
        <div className='admin-edit-order'>
            <div className='top'>
                <TitleBar title='Edytuj' subtitle={`ID: `+ order._id}/>
                <Link to={'/admin/zamowienia'}>
                    <button>Lista Zamówień</button>
                </Link>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='name'>
                        <label>ID Użytkownika</label>
                        <div>{inputs.userId}</div>
                    </div>
                    <div className='amount'>
                        <label>Wartość</label>
                        <div>{inputs.amount} zł</div>
                    </div>
                    <div className='adress'>
                        <label>Adres</label>
                        <div>
                            {inputs.adress.line1 + 
                            ((inputs.adress.line2 === 'null') ? inputs.adress.line2 : '') + 
                            ', ' +
                            inputs.adress.postal_code +
                            ' ' +
                            inputs.adress.city}
                        </div>
                    </div>
                    <div className='status'>
                        <label>Status</label>
                        <select name='status' value={inputs.status} onChange={handleChange}>
                            {status.map(option => (
                                <option value={option} key={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='right'>
                    <div className="title">Zamówienie:</div>
                <div className='list'>
                    {orderedProducts.map(item => (
                    <>
                        <div className='item'>
                            <div className='wrapper'>
                                <div className='details'>
                                    <div>{item.product.name}</div>
                                </div>
                                <div className='qty'>
                                    <div>Ilość: {item.qty}</div>
                                </div>
                                <div className='price'>
                                    {(item.product.price * item.qty).toFixed(2)} zł
                                </div>    
                            </div>
                        </div>
                    </>))}
                </div>
                </div>
            </div>
            
            <div className='save'>
                <button onClick={() =>handleUpdate(orderId, inputs)}>Zapisz zmiany</button>
            </div>
        </div>
    )
}

export default AdminEditOrder
