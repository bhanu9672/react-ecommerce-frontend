import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Nav from "./Components/Nav";
import Footer from './Components/Footer';


import AddProduct from './Components/AddProduct';
import ProductLists from "./Components/ProductLists";
import UpdateProduct from './Components/UpdateProduct';
import Store from './Components/Store';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Profile from './Components/Profile';




function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/productLists' element={<ProductLists />} />
					<Route path='/store' element={<Store />} />
					<Route path='/product/:id' element={<SingleProduct />} />
					<Route path='/update/:id' element={<UpdateProduct />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/add' element={<AddProduct />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;