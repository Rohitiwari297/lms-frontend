//Components Imports
import App from './App.jsx';
//CSS Imports
import './index.css';
//Library Imports
import { createRoot } from 'react-dom/client';
import{ BrowserRouter } from 'react-router-dom';
import {Toaster } from 'react-hot-toast';
import store from './Redux/store.js';
import { Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <Toaster/>
        </BrowserRouter>
    </Provider>

)
