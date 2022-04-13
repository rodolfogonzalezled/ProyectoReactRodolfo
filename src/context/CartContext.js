import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

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
        setCart([])
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
            if (item.id == id && item.quantity < item.stock) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedList);
    }

    const removeItem = (id) => {
        const productQuantity = cart.find(item => item.id === id).quantity;
        if (productQuantity <= 1) {
            setCart(cart.filter(item => item.id !== id));
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
            getIsProductInCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context