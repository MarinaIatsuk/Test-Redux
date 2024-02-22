import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  //аргументом к этой функции будет объект и методы, которыми они создаются
  name: 'user', //имя слайса
  initialState: {
    //говорим, какие поля будут
    nameUser: null,
    email: null,
    phone: null,
    id: null,
  },
  reducers: {
    setUsers(state, action) {
      //state-что лежит в хранилище, action-действие
      state.nameUser = action.payload.nameUser;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.nameUser = null;
      state.email = null;
      state.phone = null;
      state.id = null;
    },
  },
});
export const {setUsers,removeUser}=userSlice.actions
export default userSlice.reducer
