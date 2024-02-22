import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slice/userReduser";

export const store = configureStore({//первым аргументом перечисляем редюсеры, которые относятся к стору
reducer:{
    user:userReducer
}
})