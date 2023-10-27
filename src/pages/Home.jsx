import React from 'react'
import ProductsCategories from '../Components/ProductsCategories'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import HomeProducts from '../Components/HomeProducts'

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductsCategories />
            <Banner />
            <HomeProducts />
        </div>
    )
}

export default Home
