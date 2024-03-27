import { configureStore } from '@reduxjs/toolkit';

import ScreenSlice from "../global/features/screenSize";
import  getslice  from './features/getproduct/Getproductslice';
import  viewslice  from './features/getproduct/ViewProductslice';
import CartproductSlice from './features/getproduct/CartproductSlice';




export const store = configureStore({
    reducer: {
        screen: ScreenSlice,
        products :getslice,
        viewproducts:viewslice,
      cart: CartproductSlice
    }
});