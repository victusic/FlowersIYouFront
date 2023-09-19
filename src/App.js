import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/UI/library/fonts/fonts.css';
import './components/UI/library/colors/colors.css';
import './components/styles/App.css'
import Collect_Btn from './components/UI/buttons/CollectBtn';
import Choice_Btn from './components/UI/buttons/СhoiceBtn';
import Checkout_Btn from './components/UI/buttons/CheckoutBtn';
import EditProfileOrderHistory_Btn from './components/UI/buttons/EditProfileOrderHistoryBtn';
import GoToCatalogAboutUs_Btn from './components/UI/buttons/GoToCatalogAboutUsBtn';
import GoToCatalogAboutDelivery_Btn from './components/UI/buttons/GoToCatalogAboutDelivery';
import Select_Btn from './components/UI/buttons/SelectBtn';
import AddToCart_Btn from './components/UI/buttons/AddToCartBtn';

import Catalog from './components/playes/catalog/Catalog.jsx';
import About from './components/playes/about/About.jsx';
import Delivery from './components/playes/delivery/Delivery.jsx';
import Reviews from './components/playes/reviews/Reviews.jsx';

import NotFound from './components/playes/NotFound.jsx';
import Promo from './components/playes/promo/Promo.jsx';

import Layout from './components/playes/layout/Layout';




function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={
            <div>
              <Catalog/>
              <Promo text="Понравились букеты? Самое время сделать заказ →"></Promo>
            </div>
          }></Route>
          <Route path='about' element={
             <div>
               <About/>
               <Promo text="Хотите стать нашим клиентом? Самое время сделать заказ →"></Promo>
             </div>
          }></Route>
          <Route path='delivery' element={
            <div>
              <Delivery/>
              <Promo text="Нравится наш сервис? Самое время сделать заказ →"></Promo>
            </div>
          }></Route>
          <Route path='reviews' element={<Reviews/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
      </Routes>
    
      <Collect_Btn/>
      <Choice_Btn/>
      <Checkout_Btn/>
      <EditProfileOrderHistory_Btn title="Редактировать профиль"/>
      <GoToCatalogAboutUs_Btn/>
      <GoToCatalogAboutDelivery_Btn/>
      <Select_Btn/>
      <AddToCart_Btn price="2499"/>
    </div>
  );
}

export default App;
