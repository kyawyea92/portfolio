import { configureStore } from '@reduxjs/toolkit'
import  loginReducer from '../redux/slice/loginSlice'

export default configureStore({
  reducer: {
    login:loginReducer
  },
})