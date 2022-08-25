import { Routes, Route } from 'react-router-dom';
import Home from './Routes/home/home.component';
import NavBar from './Routes/navigation/navigation.component';
import Authentication from './Routes/authentication/authentication.component';
import Shop from './Routes/shop/shop.component.jsx';
import Checkout from './Routes/checkout/checkout.component';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
