import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/Pages/App'
import '../src/style/index.css'
import { store } from './store/index.js'
import { Provider } from 'react-redux'//добавили для редакса

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)
