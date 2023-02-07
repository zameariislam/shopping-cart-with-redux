import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'



function SideBar() {

    const products = useSelector(state => state.products)
    // console.log(products)

    let totalqant = 0
    let totalpr = 0
    products.forEach(product => {
        totalqant = product.soldQuantity + totalqant
        totalpr = product.price * product.soldQuantity + totalpr



    })

    return (
        <>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                    <Cart></Cart>
                    <div className="flex justify-center items-center text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Item</p>
                            <p className="text-2xl">TotalQuantity :{totalqant}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                    <div className="flex justify-center items-center text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Price</p>
                            <p className="text-3xl">৳ {totalpr}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar