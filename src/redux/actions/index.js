import axios from "axios";
import { getConfig } from '../../utils';

export const getShopThunk = () =>{
    return dispatch => {
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/orders/', getConfig())
            .then(res=> console.log (res.data));
    }
}