import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componets/NavBar/NavBar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import Login from './Componets/Login/Login';
import Contact from './Componets/Contact/Contact';
import Footer from './Componets/Footer/Footer';
import Cart from './Componets/Cart/Cart';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './Notification/Notification'
import RegisterUser from './Componets/RegisterUser/RegisterUser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext, { UserContextProvider } from './context/UserContext';
import { useContext } from 'react';
import Loading from './Componets/Loading/Loading';
import Orders from './Componets/Orders/Orders';
import RequireAuth from './Componets/RequireAuth/RequireAuth';


function App() {
    const { user } = useContext(UserContext);
    if (user === false) {
        return (<div><Loading /></div>);
    }

    return (
        <div>
            <NotificationProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <UserContextProvider>
                            <NavBar />
                            <Routes>
                                <Route path='/' element={<ItemListContainer />} />;
                                <Route path='/registerUser' element={<RegisterUser />} />;
                                <Route path='/login' element={<Login />} />;
                                <Route path='/category/:categoryId' element={<ItemListContainer />} />;
                                <Route path='/contact' element={<Contact />} />;
                                <Route path='/cart' element={<Cart />} />;
                                <Route path='/item/:id' element={<ItemDetailContainer />} />;
                                <Route path='/orders' element={<RequireAuth>
                                    <Orders />
                                </RequireAuth>} />;
                            </Routes>
                            <Footer />
                        </UserContextProvider>
                    </BrowserRouter>
                </CartContextProvider>
            </NotificationProvider>
        </div>
    );
}

export default App;