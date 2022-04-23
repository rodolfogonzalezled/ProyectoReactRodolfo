import { createContext, useState } from "react";
import { useNotification } from '.././Notification/Notification'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const { setNotification } = useNotification()

    const addProduct = (product, quantity) => {
        if (cart.find(item => item.id == product.id)) {
            const updatedList = cart.map(item => {
                if (item.id == product.id) {
                    return { ...item, quantity: item.quantity + quantity };
                }
                return item;
            });
            setCart(updatedList);
        } else {
            const objItemCart = {
                ...product,
                quantity
            }
            setCart([...cart, objItemCart])
        };
    }

    const clearCart = () => {
        if (cart.length > 0) {
            setNotification('success', '🛒 Se ha vaciado el carrito')
            setCart([])
        }
    }

    const endCart = () => {
        if (cart.length > 0) {
            setNotification('success', 'Su compra ha finalizado correctamente')
            setCart([])
        }
    }

    const getQuantity = () => {
        return cart.reduce((acc, el) => acc + el.quantity, 0);
    }

    const subTotal = (id) => {
        return cart.filter(item => item.id === id).reduce((acc, el) => acc + el.price * el.quantity, 0);
    }

    const total = () => {
        return cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    }

    const addItem = (id) => {
        const updatedList = cart.map(item => {
            if (item.id == id) {
                if (item.quantity < item.stock) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    setNotification('otherClass', 'Usted ha agregado la cantidad maxima disponible de producto', 'Info')
                }
            }
            return item;
        });
        setCart(updatedList);
    }

    const removeItem = (id) => {
        const productQuantity = cart.find(item => item.id === id).quantity;
        if (productQuantity <= 1) {
            setCart(cart.filter(item => item.id !== id));
            setNotification('Error', '🛒 Se ha eliminado producto del carrito')
        }
        else {
            const updatedList = cart.map(item => {
                if (item.id == id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            setCart(updatedList);
        }
    }

    const getIsProductInCart = (id) => {
        return cart.find(item => item.id === id) ? true : false;
    }

    return (
        <Context.Provider value={{
            cart,
            addProduct,
            clearCart,
            getQuantity,
            subTotal,
            total,
            addItem,
            removeItem,
            getIsProductInCart,
            endCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context