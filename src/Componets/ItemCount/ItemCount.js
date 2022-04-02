import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemCount.css'


const ItemCount = ({ stock, initialCount = 1, onAdd }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            toast.warn(`Solo hay disponible ${stock} unidades de éste producto`, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='ContainerCount'>
            <div className='ItemCount'>
                <Button onClick={decrement} variant="outline-secondary" size="lg"> ➖ </Button>
                <h2 className='Count' >{count}</h2>
                <Button onClick={increment} variant="outline-secondary" size="lg"> ➕ </Button>
                <ToastContainer />
            </div>
            <Button onClick={() => onAdd(count)} className='AddCart' variant="outline-success">Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;