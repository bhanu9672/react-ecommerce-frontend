import React from 'react'
import ProductsCategories from '../Components/ProductsCategories'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import HomeProducts from '../Components/HomeProducts'
import WatchCollection from '../Components/WatchCollection'

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductsCategories />
            <Banner />
            <HomeProducts />
            <WatchCollection />
        </div>
    )
}

export default Home
