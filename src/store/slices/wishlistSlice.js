import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    wishlistItems: []
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlistItem(state, action) {
            const newItemId = action.payload._id;
            const existingItem = state.wishlistItems.find(item => item._id === newItemId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.wishlistItems.push({...action.payload, quantity: 1});
            }
        },
        removeToWishlistItem(state, action) {
            state.wishlistItems = state.wishlistItems.filter(item => item._id !== action.payload);
        },
    }
});

export const { addToWishlistItem, removeToWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;