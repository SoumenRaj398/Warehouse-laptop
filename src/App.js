
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Itemdetail from './Pages/Itemdetail/Itemdetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Requireauth from './Pages/Login/Requireauth/Requireauth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/NotFound/Notfound';

function App() {
  return (
    <div>
     

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element ={<Home></Home>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path ="/product/:productId" element={<Itemdetail></Itemdetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element ={
          <Requireauth> 
            <Checkout></Checkout>
            </Requireauth>
          }></Route>
        <Route path="*" element = {<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>

      
    </div>
  );
}

export default App;
