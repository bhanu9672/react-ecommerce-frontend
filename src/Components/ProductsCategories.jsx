import React from 'react'
import Toy from "../toys.png"
import Clothes from "../Clothes.png"
import Fruits from "../fruits.png"
import Men from "../men.png"
import Laptop from "../laptop.png"

const ProductsCategories = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold font-mono'>
                Shop by Categories
            </h2>

            <div className="p-1 flex flex-wrap items-center justify-center">
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: "0.1" }}
                    >
                        <rect
                            x="159.52"
                            y={175}
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: "radial-gradient(black, transparent 60%)",
                                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                opacity: "0.2"
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src={Toy}
                            alt=""
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block font-semibold text-xl text-center">
                            TOY'S
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg group">
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: "0.1" }}
                    >
                        <rect
                            x="159.52"
                            y={175}
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: "radial-gradient(black, transparent 60%)",
                                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                opacity: "0.2"
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src={Laptop}
                            alt=""
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block font-semibold text-xl text-center">
                        Laptop's
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: "0.1" }}
                    >
                        <rect
                            x="159.52"
                            y={175}
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: "radial-gradient(black, transparent 60%)",
                                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                opacity: "0.2"
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src={Fruits}
                            alt=""
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block font-semibold text-xl text-center">
                        Fruits
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg group">
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: "0.1" }}
                    >
                        <rect
                            x="159.52"
                            y={175}
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: "radial-gradient(black, transparent 60%)",
                                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                opacity: "0.2"
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src={Clothes}
                            alt=""
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block font-semibold text-xl text-center">
                        Clothe's
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: "0.1" }}
                    >
                        <rect
                            x="159.52"
                            y={175}
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width={152}
                            height={152}
                            rx={8}
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: "radial-gradient(black, transparent 60%)",
                                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                opacity: "0.2"
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src={Men}
                            alt=""
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block font-semibold text-xl text-center">
                        Men's
                        </span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProductsCategories
