import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import { addToWishlistItem } from "../store/slices/wishlistSlice"

const SingleProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [picture, setPicture] = useState({});
    const [ products, setProducts ] = useState([]);
    const params = useParams();
    const local_url = "http://localhost:5000";
    const live_url = "https://node-ecommerce-backend.vercel.app";

    const dispatch = useDispatch();
	const handleAddToCart = item => {
		dispatch(addItem(item));
	};

    const handleAddToWishlist = item => {
		dispatch(addToWishlistItem(item));
	};

    useEffect(() => {
        getProductDertails();
    }, []);

    const getProductDertails = async () => {
        let result = await fetch(`${live_url}/product/${params.id}`);
        result = await result.json();
        setProducts(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
        const blob = new Blob([Int8Array.from(result.img.data.data)], { type: result.img.contentType });
        setPicture(window.URL.createObjectURL(blob))
        console.log(result)
    }

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 shadow bg-white border border-gray-200 rounded-lg mb-10">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img
                                    className="w-full h-full object-cover"
                                    src={picture}
                                    alt="Product Image"
                                />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {name}
                            </h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Price:
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300">
                                        ${price}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-bold mr-3">
                                        Availability:
                                    </span>
                                    <span className="text-white bg-green-600 rounded-full px-4 p-2 rounded">
                                        In Stock
                                        <span className="rounded-full px-3 ml-2 text-black bg-white text-bkack rounded"> 2 </span>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Select Size:
                                </span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                        S
                                    </button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                        M
                                    </button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                        L
                                    </button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                        XL
                                    </button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                        XXL
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Product Description:
                                </span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                                    Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
                                    vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
                                    nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                                    lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
                                    nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
                            <div className="flex -mx-2 mb-4 pt-8">
                                <div className="w-1/2 px-2">
                                    <button 
                                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                                    onClick={() => handleAddToCart(products)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button 
                                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                                    onClick={() => handleAddToWishlist(products)}
                                    >
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="relative overflow-hidden">
                                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product" />
                                    <div className="absolute inset-0 bg-black opacity-40" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-gray-900 font-bold text-lg">$29.99</span>
                                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="relative overflow-hidden">
                                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product" />
                                    <div className="absolute inset-0 bg-black opacity-40" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-gray-900 font-bold text-lg">$29.99</span>
                                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="relative overflow-hidden">
                                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product" />
                                    <div className="absolute inset-0 bg-black opacity-40" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-gray-900 font-bold text-lg">$29.99</span>
                                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;