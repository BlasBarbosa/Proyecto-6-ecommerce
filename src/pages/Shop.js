import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getShopThunk } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Shop = () => {

    const navigate = useNavigate ();
    const logOut = () => {
        localStorage.setItem("token", "");
        navigate("/login");
    }

    const dispatch = useDispatch()

    const shopList = useSelector(state => state.shopList);

    useEffect(()=> {
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/swagger/')
            .then(res => dispatch({ type: "SET_SHOP_LIST", payload: res.data }))
            .catch(error => console.log(error.response));
    }, [ dispatch ]);

    return (
        <div>
            <h1>Shop</h1>
            <button onClick={logOut} >Log Out</button>

            {
                shopList.map(myNew => (
                    <h2>{myNew.headline}</h2>
                ))

            }
        </div>
    );
};

export default Shop;