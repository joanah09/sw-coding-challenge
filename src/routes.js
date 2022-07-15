import React, { Component } from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';

class RoutesURL extends Component {
    render() {
        return (
        <React.StrictMode>
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/products" element={<Products />} />
              </Routes>
            </BrowserRouter>
        </React.StrictMode>
        )
    }
}

export default RoutesURL

