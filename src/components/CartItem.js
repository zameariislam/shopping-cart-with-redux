import React from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/products/action';

const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    const { id, name, totalQuantity,price } = product

    const handleIncreaseQuantity = (id) => {
        console.log(id)
        dispatch(addProducts(id))

    }

    return (
        <div className="flex justify-between border-b-2 mb-2" >
            <div className="text-lg py-2">
                <div className="flex justify-between px-4 items-center">
                    <div className="text-lg font-semibold">
                        <p>
                            {name}
                            <span>   ({totalQuantity === 0 ? 'Stock Out' : totalQuantity})</span>


                            {/* {product.name}{' '} */}
                            {/* <span className={product.qty === 0 && 'py-1 px-3 bg-red-500 rounded text-white'}>
                              
                            </span> */}
                        </p>
                        <p className="text-gray-400 text-base">TK {price}</p>
                    </div>

                </div>

            </div>
            <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                    {/* <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"

                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18 12H6"
                            />
                        </svg>
                    </button> */}
                    <p></p>
                    <button
                        onClick={() => handleIncreaseQuantity(id)}
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"

                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;