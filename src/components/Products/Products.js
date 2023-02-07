import React from 'react'
import Product from './Product'

function Products() {


    return (
        <>
            <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">

                <Product />
                <Product />
                <Product />
                <Product />

            </div>
        </>
    )
}

export default Products