import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, wishlistReducer } from './slices';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
