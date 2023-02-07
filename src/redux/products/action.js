import { ADDPRODUCTS } from "./actionTypes"


export const addProducts = (id) => {


    return {
        type: ADDPRODUCTS,
        payload: id

    }

}