import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/header';
import Footer from './footer/footer';
import Slide from './main/slider'
import Main from './main/main'
import Promo from './main/promoção'
import Categoria from './main/categoria'
import reportWebVitals from './reportWebVitals';

import {register} from 'swiper/element/bundle'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

register()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Slide />
    <Main />
    <Promo />
    <Categoria/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
