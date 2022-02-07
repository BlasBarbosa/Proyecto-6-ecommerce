import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { Login, Shop, ShopDetail, Cart } from "./pages";
import { ProtectedRoutes } from './components';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />

          <Route path="/" element={<Navigate to={"/shop"}/>} />

          <Route element={<ProtectedRoutes/>} >
            <Route path="/shop"  element={<Shop/>}/>
            <Route path="/shop/:id" element={<ShopDetail/>} />
            <Route path="/cart" element={<Cart/>} />
          </Route>          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
