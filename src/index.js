import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from "react-router-dom";
// import Zehra from './zehra';
// import CartList from "./CartList"
// import NotFound from "./NotFound"
// import ProductList from './ProductList';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            {/* <Routes>
                <Route exact path="/" element={<App />} />
                <Route  path="/zehra" element={<Zehra />} />
                <Route  path="/cart" element={<CartList />} />
                <Route element={<NotFound />} />
            </Routes> */}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

// serviceWorker.unregister();
