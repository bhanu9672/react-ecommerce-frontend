import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItemId = action.payload._id;
            const existingItem = state.cartItems.find(item => item._id === newItemId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
        },
        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item._id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },
        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item._id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        }
    }
});

export const { toggleCart, addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;