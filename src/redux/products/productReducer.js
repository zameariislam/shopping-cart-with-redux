import { ADDPRODUCTS } from "./actionTypes"


const initialState = [
    { id: 1, name: 'ASUS Vivobook X515MA', price: 35500, totalQuantity: 10, soldQuantity: 0 },
    { id: 2, name: 'Dell E1916HV18.5inch', price: 9000, totalQuantity: 5, soldQuantity: 0 },
    { id: 3, name: 'Canon Ecos 4000 18 MP', price: 38500, totalQuantity: 7, soldQuantity: 0 }
]



const productReducer = (state = initialState, action) => {




    switch (action.type) {
        case ADDPRODUCTS:
            console.log(state)
            const updateState = state.map(product => {

                const { id } = product
                if (product.totalQuantity > 0) {
                    if (id === action.payload) {
                        return {
                            ...product,
                            soldQuantity: product.soldQuantity + 1,
                            totalQuantity: product.totalQuantity - 1
                        }
                    }
                    else {
                        return { ...product }
                    }

                }
                else {
                    return { ...product }
                }




            })
            return updateState




        default:
            return state

    }





}
export default productReducer