import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import WishlistReducer from './slices/wishlistSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        Wishlist : WishlistReducer,
    }
});


export default store;