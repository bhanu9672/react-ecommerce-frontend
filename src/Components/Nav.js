import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Logo from "../logo.png"
import { removeItem } from "../store/slices/cartSlice";
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AiOutlineHeart } from "react-icons/ai";
import { LuUserCircle2 } from "react-icons/lu";

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Store', href: '/store', current: false },
	{ name: 'Add Products', href: '/add', current: false },
	{ name: 'Contact', href: '/contact', current: false },
	{ name: 'Faq', href: '/faq', current: false },
	{ name: 'Category', href: '/category', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Nav = () => {
	const auth = localStorage.getItem('user');
	console.log(auth)
	const navigate = useNavigate();
	const LogOut = () => {
		localStorage.clear();
		navigate("/login")
	}
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch();
	const carts = useSelector((state) => state.cart.cartItems)
	const wishlist = useSelector((state) => state.Wishlist.wishlistItems)
	console.log(wishlist)

	const ProductsList = carts.length > 0 && carts.map(function (product) {
		if (product.img) {
	//		const blob = new Blob([Int8Array.from(product.img.data.data)], { type: product.img.contentType });
	//		var image = window.URL.createObjectURL(blob);

var image = `data:${product.img.contentType};bade64,${(product.img.data.toString('base64'))}`;

//var image = `data:{product.img.contentType};${(product.img.data.toString('base64'))}`;
		}
		return (
			<>
				<li key={product.id} className="flex py-6">
					<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
						{
							product.img &&
							<img
								src={image}
								alt="Product"
								className="h-full w-full object-cover object-center"
							/>
						}
					</div>
					<div className="ml-4 flex flex-1 flex-col">
						<div>
							<div className="flex justify-between text-base font-medium text-gray-900">
								<h3>
									<a href={product.href}>{product.name}</a>
								</h3>
								<p className="ml-4">{product.price}</p>
							</div>
							<p className="mt-1 text-sm text-gray-500">{product.color}</p>
						</div>
						<div className="flex flex-1 items-end justify-between text-sm">
							<p className="text-gray-500">Qty {product.quantity}</p>
							<div className="flex">
								<button
									type="button"
									onClick={() => dispatch(removeItem(product._id))}
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				</li>
			</>
		);
	})
	console.log(carts)
	return (
		<div className="pb-10 md:pb-28">
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
										<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
											<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
												<div className="flex items-start justify-between">
													<Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
													<div className="ml-3 flex h-7 items-center">
														<button
															type="button"
															className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
															onClick={() => setOpen(false)}
														>
															<span className="absolute -inset-0.5" />
															<span className="sr-only">Close panel</span>
															<XMarkIcon className="h-6 w-6" aria-hidden="true" />
														</button>
													</div>
												</div>
												<div className="mt-8">
													<div className="flow-root">
														<ul role="list" className="-my-6 divide-y divide-gray-200">
															{ProductsList}
														</ul>
													</div>
												</div>
											</div>
											<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
												<div className="flex justify-between text-base font-medium text-gray-900">
													<p>Subtotal</p>
													<p>$262.00</p>
												</div>
												<p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
												<div className="mt-6">
													<Link
														href="#"
														to="/checkout"
														onClick={() => setOpen(false)}
														className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
													>
														Checkout
													</Link>
												</div>
												<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
													<p>
														or
														<Link
															className="font-medium text-indigo-600 hover:text-indigo-500 p-2"
															to="/"
															onClick={() => setOpen(false)}
														>
															Continue Shopping
															<span aria-hidden="true"> &rarr;</span>
														</Link>
													</p>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
			<Disclosure as="nav" className="bg-gray-800 md:fixed w-full z-10">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex flex-shrink-0 items-center">
										<Link to="/">
											<img
												className="h-8 w-auto"
												src={Logo}
												alt="Your Company"
											/>
										</Link>
									</div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<Link
													key={item.name}
													to={item.href}
													className={classNames(
														item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
														'rounded-md px-3 py-2 text-sm font-medium'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<button
										onClick={() => setOpen(true)}
										className="relative flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
									>
										<svg className="flex-1 w-8 h-8 fill-current pt-2" viewBox="0 0 24 24" >
											<path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
										</svg>
										<span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
											{carts.length}
										</span>
									</button>
									<Link
										to='/wishlist'
										className="relative flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
									>
										<AiOutlineHeart size={30} />
										<span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
											{wishlist.length}
										</span>
									</Link>
									{
										auth ?
											<Link
												to='/profile'
												className="relative flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
											>
												<LuUserCircle2 size={30} />
											</Link>
											:
											<Link
												to='/login'
												className="relative flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
											>
												<LuUserCircle2 size={30} />
											</Link>
									}
								</div>
							</div>
						</div>
						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2">
								{navigation.map((item) => (
									<Link
										key={item.name}
										as="a"
										to={item.href}
										className={classNames(
											item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Link>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
}

export default Nav;