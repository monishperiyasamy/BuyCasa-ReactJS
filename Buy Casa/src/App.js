import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Buypage from './Project/Buypage';
import Rentpage from './Project/Rentpage';
import FilterPage from './Project/FilterPage';
import Home from './Project/Home';
import Login from './Project/Login';
import SignUpPage from './Project/SignUp';
import Cards from './Project/Cards';
import ProductViewBuy from './Project/ProductViewBuy';
import ProductDetailsCardBuy from './Project/ProductDetailsCardBuy';
import ProductViewRent from './Project/ProductViewRent';
import ProductDetailsCardRent from './Project/ProductDetailsCardRent';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/SignUp" element={<SignUpPage/>}></Route>
    <Route path="/Rentpage" element={<Rentpage/>}></Route>
    <Route path="/Buypage" element={<Buypage/>}></Route>
    <Route path="/filter" element={<FilterPage/>}></Route>
    <Route path='/cards' element={<Cards/>}></Route>
    <Route path='/view' element={<ProductViewBuy/>}></Route>
    <Route path='/view1' element={<ProductViewRent/>}></Route>
    <Route path='/viewrent' element={<ProductViewRent/>}></Route>
    <Route path='/productdetails' element={<ProductDetailsCardBuy/>}></Route>
    <Route path='/productdetails1' element={<ProductDetailsCardRent/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;