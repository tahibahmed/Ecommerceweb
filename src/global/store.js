import { configureStore } from '@reduxjs/toolkit';

import ScreenSlice from "../global/features/screenSize";

export const store = configureStore({
    reducer: {
        screen: ScreenSlice,
    }
});