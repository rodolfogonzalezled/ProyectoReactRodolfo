import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componets/NavBar/NavBar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import Login from './Componets/Login/Login';
import Contact from './Componets/Contact/Contact';
import Footer from './Componets/Footer/Footer';
import Cart from './Componets/Cart/Cart';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={"Próximamente encontrarás los mejores Juegos"} />} />;
                        <Route path='/login' element={<Login />} />;
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />;
                        <Route path='/contact' element={<Contact />} />;
                        <Route path='/cart' element={<Cart />} />;
                        <Route path='/item/:id' element={<ItemDetailContainer />} />;
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}

export default App;