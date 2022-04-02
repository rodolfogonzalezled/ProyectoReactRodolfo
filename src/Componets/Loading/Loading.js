import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

const Loading = () => {
    return (
        <div className='Loading'>
            <Spinner className='Spinner' animation="border" role="status"></Spinner>
            <span className='LoadingText'>Cargando...</span>
        </div>
    )
}

export default Loading;